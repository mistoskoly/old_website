import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h2>
        Co můžu dělat <i>místo školy</i>?
      </h2>
      <main>
        <section>
          Tato webová stránka chce, abys{' '}
          <Link to="/odejdi">odešel ze školy</Link> a začal{' '}
          <Link to="/zij">žít skutečný život</Link>.
        </section>
        <ul>
          <li>Najdeš zde informace, návody a zkušenosti, jak to udělat.</li>
          <li>
            Budeš se zde moci <Link to="/spoj-se">spojit s lidmi</Link>, kteří
            se vydali stejnou cestou a kteří tě podpoří.
          </li>
          <li>
            Společně <Link to="/zmen">změníme systém</Link>, který nám škodí.
          </li>
        </ul>
      </main>
      <aside>
        Webová stránka je ve výstavbě. Brzy toho tady najdeš víc. :)
      </aside>
    </>
  );
}
