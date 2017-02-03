import React from 'react';
import { Collapse, CollapseItem, CollapsePanel, CollapseTrigger } from 'App';

require('./stylesheets/Glossary.scss')

const { array } = React.PropTypes;


/*
 * The Glossary of Terms component.
 *
 * @param {Object} props - The React props object.
 *
 * @since 1.0.0
 */

const Glossary = (props) => {
  if (props.terms.length === 0) {
    return null;
  }

  const glossary = props.terms.map((term) => {
    return(
      <CollapseItem className='glossary-item' key={ term.id }>
        <CollapseTrigger className='glossary-trigger' tag={ 'p' }>{ term.title }</CollapseTrigger>
        <CollapsePanel className='glossary-text' description={ term.description } />
      </CollapseItem>
    );
  });

  return (
    <div className='glossary'>
      <h3 className='glossary-title'>Glossary of Terms</h3>
      <Collapse className='glossary-content'>
        { glossary }
      </Collapse>
    </div>
  );
}


Glossary.propTypes = {
  terms: array
}


export default Glossary;
