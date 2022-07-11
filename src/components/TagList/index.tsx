import styles from './index.module.scss';

import Tag from './Tag';

interface TagListProps<T extends string> {
  tagList: { [key in T]: string };
  selectedTagList: T[];
  setSelectedTagList: React.Dispatch<React.SetStateAction<T>>;
}

const TagList = <T extends string>({
  tagList,
  selectedTagList,
  setSelectedTagList,
}: TagListProps<T>) => {
  return (
    <div className={styles.container}>
      {Object.keys(tagList).map((key, index) => (
        <Tag
          key={index}
          selected={selectedTagList.some((item) => item === key)}
          label={tagList[key]}
          onClick={() => setSelectedTagList(key as T)}
        />
      ))}
    </div>
  );
};

export default TagList;
