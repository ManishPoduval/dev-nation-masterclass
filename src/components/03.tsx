import { useState } from 'react';
import { questions } from './questions';

const Question = ({ question, answer }: any) => {
  const [hidden, toggleHidden] = useState(true);

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${hidden ? 'blurred' : 'visible'}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(!hidden)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

const Application3 = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default Application3;
