import styles from './index.module.scss';

import { FC } from 'react';

import cross from '../../assets/svg/cross.svg';

const AttachFile: FC<{
  attachedFileName?: string;
  label: string;
  setFile: (data: File) => void;
}> = ({ attachedFileName = '', label, setFile = () => {} }) => {
  const removeFile = () => {
    setFile(null);
  };

  const setFileHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className={styles.container}>
      {attachedFileName && (
        <div className={styles.fileName}>
          <span className="interMedium2036">{attachedFileName}</span>
          <div role="button" className={styles.removeBtn} onClick={removeFile}>
            <img src={cross} />
          </div>
        </div>
      )}
      <label
        htmlFor={'fileInput'}
        className="interMedium2036"
      >{`+ ${label}`}</label>
      <input id="fileInput" type="file" onChange={setFileHandler} />
    </div>
  );
};

export default AttachFile;
