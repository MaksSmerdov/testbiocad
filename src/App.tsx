import React, {useState} from 'react';
import {SequenceForm} from './components/SequenceForm/SequenceForm.tsx';
import {Alignment} from './components/Alignment/Alignment.tsx';
import './styles/global.scss';

export const App: React.FC = () => {
  const [seqs, setSeqs] = useState<{ s1: string; s2: string } | null>(null);

  return (
    <div className="app">
      <h1 className='app__title'>
        Выравнивание аминокислотных последовательностей
      </h1>

      <SequenceForm onSubmit={(s1, s2) => setSeqs({s1, s2})}/>

      {seqs && <Alignment seq1={seqs.s1} seq2={seqs.s2}/>}
    </div>
  );
};
