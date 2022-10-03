import React from 'react';
import styles from '../styles/ChartRow.module.css';

function ChartRow(props) {
  function myFunction() {
    var x = document.getElementById(props.index);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  return (
    <div className={styles.chartRow}>
      <label
        id={props.index}
        style={{ display: 'none' }}
        className={styles.label}
      >
        {props.amount}
      </label>
      <div
        onMouseOver={myFunction}
        onMouseOut={myFunction}
        style={
          props.index === props.today - 1
            ? {
                height: props.amount * 2.5 + 'px',
                backgroundColor: 'hsl(186, 34%, 60%)',
              }
            : {
                height: props.amount * 2.5 + 'px',
              }
        }
        className={styles.chartPilar}
      ></div>
      <p>{props.day}</p>
    </div>
  );
}

export default ChartRow;
