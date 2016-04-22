import React from 'react';
import { connect } from 'react-redux';
import styles from './Task.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(styles);

const TASKS_MARGINBOTTOM = 7;

const Task = ({ id, title, description }, i) => {

  function onMouseOut(e) {
    const task = e.target.parentNode;
    task.style.padding = '0';
    task.removeEventListener('mouseout', onMouseOut);
  }

  function onMouseEnter(e) {
    const task = e.target.parentNode;
    const height = task.offsetHeight;
    task.style.padding = `${height + TASKS_MARGINBOTTOM}px 0 0`;
    task.firstChild.style.height = `${height}px`;
    task.addEventListener('mouseout', onMouseOut);
  }

  return (
    <li key={ id } className={ css('task-item') } data-id={ id } data-index={ i }>
      <div className={ css('fake-ondrag') } onMouseEnter={ onMouseEnter }></div>
      <div className={ css('task-item-content', 'js-item-content') }>
        <a href={ `#${id}` } className={ css('task-item-title', 'js-task-title') } draggable="false">{ title }</a>
        <p className={ css('task-item-description', 'js-task-description') }>{ description }</p>
      </div>
    </li>
  );
}

export default Task;
