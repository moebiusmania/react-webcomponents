import React from 'react';

export default class Lorem extends React.Component {
  render() {
    const url = this.props.url || '';

    return (
      <div>
        <p>Welcome to your next project, let's get started! 🎉</p>
        <p>For the few options please refer to the <a target="_blank" href={url}>readme file</a> on the project repo</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien turpis, posuere vitae metus sed, pulvinar mollis nisl. Cras eu enim nec lacus faucibus laoreet. Phasellus sed commodo ipsum, vitae rutrum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        <p><small>(this is just a dummy element, please remove it 😎)</small></p>
      </div>
    );
  }
}