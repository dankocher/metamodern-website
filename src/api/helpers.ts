import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { useDeviceSelectors } from 'react-device-detect';
import { useEffect, useState } from 'react';
import { colors } from '../styles/colors';
import { screenWidths } from '../data/screenWidths';
const url = 'https://dev.goodstudio.by/sendMessage.php';

export const sendToEmail = async (data, files) => {
  const formData = new FormData();
  formData.append('brief', data);

    for (let file of files) {
      formData.append('files[]', file);
    }
  

  return await axios
    .post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data)
    .then(async (res) => {
      return res;
    })
    .catch((e) => {
      return { ok: false, status: 'unreachable' };
    });
};

export function makeIterator(array) {
  var nextIndex = 0;
  var prevIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++] }
        : { value: array[(nextIndex = 0)] };
    },
    prev: function () {
      return prevIndex >= 0
        ? { value: array[nextIndex--] }
        : { value: array[(nextIndex = array.length - 1)] };
    },
  };
}

const startScalingHandler = (event) => {
  const addCtrlScreen = () => {
    let div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.id = 'ctrlScreen';
    document.body.append(div);
  };
  if (
    (event.code === 'ControlLeft' || event.ctrlKey) &&
    !document.querySelector('#ctrlScreen')
  ) {
    addCtrlScreen();
  }
};

const endScalingHandler = (event) => {
  if (!event.ctrlKey) {
    let div = document.querySelector('#ctrlScreen');
    document.body.removeChild(div);
  }
};

const blockSwipeHandler = (e) => {
  let touches = e.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    let touch = touches[i];
    if (touch.pageX > 20 && touch.pageX < window.innerWidth - 20) return;
  }
  e.preventDefault();
  e.stopPropagation();
};

export const init = (selectors, isMobile) => {
  document.documentElement.style.setProperty(
    '--block-height',
    // window.innerHeight + 'px'
    document.documentElement.clientHeight + 'px'
  );
  window.history.scrollRestoration = 'manual';
  let bodyHeight = null;
  let textShadow = null;
  let mainBlack = colors.mainBlack;
  let backgroundHeight = '100vh';
  let backgroundPosition = 'fixed';
  const div = document.querySelector('div');
  div.addEventListener('touchstart', blockSwipeHandler, true);

  if (isMobile) {
    if (selectors.isIOS) {
      backgroundHeight = '100%';
      backgroundPosition = 'absolute';
    }
    bodyHeight = 'fit-content';
    textShadow = `0 0 0.7px ${mainBlack},`.repeat(4);
    textShadow = textShadow.substring(0, textShadow.length - 1);
  } else {
    bodyHeight = '100%';
    textShadow = `0 0 0.7px ${mainBlack},`.repeat(2);
    textShadow = textShadow.substring(0, textShadow.length - 1);
  }
  document.documentElement.style.setProperty(
    '--background-height',
    backgroundHeight
  );
  document.documentElement.style.setProperty(
    '--background-position',
    backgroundPosition
  );
  document.documentElement.style.setProperty('--body-height', bodyHeight);
  document.documentElement.style.setProperty('--textShadow', textShadow);
  screenWidths.forEach((element) => {
    document.documentElement.style.setProperty(
      element.name,
      element.value + 'px'
    );
  });
  document.addEventListener('touchend', endScalingHandler, false);
  window.addEventListener('keydown', startScalingHandler);
  window.addEventListener('keyup', endScalingHandler);
  document.addEventListener('wheel', startScalingHandler);
  document.addEventListener('wheel', endScalingHandler, { capture: true });

  return () => {
    window.removeEventListener('keydown', startScalingHandler);
    window.removeEventListener('keyup', endScalingHandler);
    document.removeEventListener('wheel', startScalingHandler);
    document.removeEventListener('wheel', endScalingHandler);
  };
  // document.body.style.zoom = 1/window.devicePixelRatio
  // document.body.style.webkitTransform = 'scale(2)';
  // if (navigator.userAgent.indexOf('Win') !== -1 || navigator.userAgent.indexOf('Linux') !== -1)
  //   document.body.style.setProperty('zoom', 1 / window.devicePixelRatio + '');
};
