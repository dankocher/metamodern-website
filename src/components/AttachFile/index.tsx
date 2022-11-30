import styles from './index.module.scss';

import { FC, useRef } from 'react';

import cross from '../../assets/svg/cross.svg';

const AttachFile: FC<{
  attachedFileName?: string;
  label: string;
  setFile: (data: File) => void;
}> = ({ attachedFileName = '', label, setFile = () => {} }) => {
  const inputRef = useRef(null);

  const removeFile = () => {
    setFile(null);
  };

  const setFileHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <label
        htmlFor={'fileInput'}
        className="interMedium1416"
      >{`+ ${label}`}</label>
      <input
        ref={inputRef}
        id="fileInput"
        type="file"
        onChange={setFileHandler}
      />

      {attachedFileName && (
        <div className={styles.fileName}>
          <span className="interMedium1416">{attachedFileName}</span>
          <div role="button" className={styles.removeBtn} onClick={removeFile}>
            <img src={cross} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AttachFile;
