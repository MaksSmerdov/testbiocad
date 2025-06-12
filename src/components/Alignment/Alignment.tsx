import React, {useState} from 'react';
import {Notification} from '../Ui/Notification/Notification.tsx';
import colorMap from './colorMap.ts';
import styles from './Alignment.module.scss';

interface Props {
  seq1: string;
  seq2: string;
}

export const Alignment: React.FC<Props> = ({seq1, seq2}) => {
  const [notif, setNotif] = useState<{ open: boolean; message: string }>({
    open: false,
    message: '',
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotif({open: true, message: `Скопировано: ${label}`});
    });
  };

  const renderRow = (s: string, isSecond = false) => (
    <div
      className={styles.alignment__row}
      onClick={() =>
        copyToClipboard(s, isSecond ? 'Вторая строка' : 'Первая строка')
      }
      style={{cursor: 'pointer'}}
      title={`Кликните, чтобы скопировать ${
        isSecond ? 'вторую' : 'первую'
      } строку`}
    >
      {Array.from(s).map((ch, i) => {
        const isMismatch = isSecond && ch !== seq1[i];
        return (
          <span
            key={i}
            className={`${styles.alignment__char} ${isMismatch ? styles.alignment__mismatch : ''}`}
            style={!isSecond ? {backgroundColor: colorMap[ch]} : undefined}
          >
            {ch}
          </span>
        );
      })}
    </div>
  );

  return (
    <>
      <h3 className={styles.alignment__title}>Результат:</h3>
      <div className={styles.alignment}>
        {renderRow(seq1, false)}
        <br/>
        {renderRow(seq2, true)}
      </div>

      <Notification
        open={notif.open}
        message={notif.message}
        severity="success"
        onClose={() => setNotif({open: false, message: ''})}
      />
    </>
  );
};
