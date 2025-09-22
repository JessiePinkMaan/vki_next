'use client';

import useGroups from '@/hooks/useStudents';
import type GroupInterface from '@/types/GroupInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students } = useGroups();

  return (
    <div className={styles.Students}>
      {students.map((group: GroupInterface) => (
        <h2 key={group.id}>
          {group.name}
        </h2>
      ))}
    </div>
  );
};

export default Students;
