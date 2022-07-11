import styles from './index.module.scss';

import { FC } from 'react';
import { useEffect, useState, useRef } from 'react';

const MTextArea: FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  rowsMins?: number;
  rowsMax?: number;
}> = ({ label, value, onChange, rowsMins = 1, rowsMax = 5 }) => {
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [textAreaWrapperHeight, setTextAreaWrapperHeight] = useState('auto');
  const [isSizeFixed, setIsSizeFixed] = useState(false);

  useEffect(() => {
    setTextAreaHeight('auto');
  }, [value]);

  useEffect(() => {
    const node = textAreaRef.current;
    const scrollHeight = node.scrollHeight;
    const nodeStyle = window.getComputedStyle(node);

    // get padding of textAret in numbers
    const padding = parseInt(
      nodeStyle.getPropertyValue('padding').replace('px', '')
    );

    // get lineHeight of textAret in numbers
    const lineHeight = parseInt(
      nodeStyle.getPropertyValue('line-height').replace('px', '')
    );

    // if maxRow >= rows
    if (
      !isNaN(lineHeight) &&
      (scrollHeight - padding * 2) / lineHeight >= rowsMax
    ) {
      setIsSizeFixed(true);
      const height = padding * 2 + lineHeight * rowsMax;
      setTextAreaHeight(`${height}px`);
      setTextAreaWrapperHeight(`${height + 24}px`);
    } else {
      setIsSizeFixed(false);
      setTextAreaHeight(`${scrollHeight}px`);
      setTextAreaWrapperHeight(`${scrollHeight + 24}px`);
    }
  }, [textAreaHeight]);

  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.wrapper} style={{ height: textAreaWrapperHeight }}>
      <div className={styles.container} style={{ height: textAreaHeight }}>
        <textarea
          ref={textAreaRef}
          className="interRegular2436"
          rows={rowsMins}
          style={{
            overflow: isSizeFixed ? 'overlay' : 'hidden',
          }}
          required={true}
          onChange={onChangeHandler}
          value={value}
        />
        <span className="interRegular2436">{label}</span>
        <div />
      </div>
    </div>
  );
};

export default MTextArea;
