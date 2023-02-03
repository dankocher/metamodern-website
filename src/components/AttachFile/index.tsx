import styles from './index.module.scss';

import { FC, useRef } from 'react';

import cross from '../../assets/svg/cross.svg';

const AttachFile: FC<{
  attachedFileNames?: string[];
  label: string;
  setFiles: (data: File[]) => void;
  removeFile:(event: {}, index: number) => void;
}> = ({ attachedFileNames = [], label, setFiles = () => {}, removeFile = () => { }}) => {
  const inputRef = useRef(null);

  const setFileHandler = (event) => {
    setFiles(event.target.files);
  };

  const cutName = (name) => {
    const length = name.length;
    if(name.length>30){
      return name.substring(0, 12) +'...'+name.substring(length-13, name.length-1)
    }
    else return name;
  }

  return (
    <div className={styles.container}>
      <label
        htmlFor={'fileInput'}
        className="interMedium1416"
      >{`+ ${label} (${attachedFileNames.length}/25)`}</label>
      <input
        ref={inputRef}
        id="fileInput"
        type="file"
        onChange={setFileHandler}
        multiple
        disabled={attachedFileNames.length===25}
      />
    
      {attachedFileNames.map((name, index)=>(
        <div className={styles.fileName}>
          <span className="interMedium1416">{cutName(name)}</span>
          <div role="button" className={styles.removeBtn} onClick={(e)=>removeFile(e, index)}>
            <img src={cross} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttachFile;
