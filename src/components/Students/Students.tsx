'use client';

import useStudents from '@/hooks/useStudents';
import type GroupInterface from '@/types/GroupInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Students}>
      {students.map((students: GroupInterface) => (
        <h2 key={students.id}>
          {students.name}
        </h2>
      ))}
    </div>
  );
};

export default Students;
