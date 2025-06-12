import React from 'react';
import {useForm} from 'react-hook-form';
import CustomInput from '../Ui/CustomInput/CustomInput.tsx';
import CustomButton from "../Ui/CustomButton/CustomButton.tsx";
import styles from './SequenceForm.module.scss';

interface FormValues {
  seq1: string;
  seq2: string;
}

interface Props {
  onSubmit: (s1: string, s2: string) => void;
}

export const SequenceForm: React.FC<Props> = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<FormValues>();

  const s1 = watch('seq1') ?? '';

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({seq1, seq2}) =>
        onSubmit(seq1.toUpperCase(), seq2.toUpperCase())
      )}
      noValidate
    >
      <CustomInput
        label="Последовательность 1"
        fullWidth
        error={errors.seq1?.message}
        {...register('seq1', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[ARNDCEQGHILKMFPSTWYV-]+$/i,
            message: 'Только A,R,N…V и "-"',
          },
        })}
      />

      <CustomInput
        label="Последовательность 2"
        fullWidth
        error={errors.seq2?.message}
        {...register('seq2', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[ARNDCEQGHILKMFPSTWYV-]+$/i,
            message: 'Только A,R,N…V и "-"',
          },
          validate: (value) =>
            value.length === s1.length ||
            'Длины последовательностей должны быть равны',
        })}
      />

      <CustomButton type="submit" className={styles.button}>
        Выравнить
      </CustomButton>
    </form>
  );
};
