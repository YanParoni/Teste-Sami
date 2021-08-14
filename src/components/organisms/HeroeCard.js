import React, { Component } from 'react';
import HeroeName from '../atoms/HeroeName';
import HeroeImg from '../atoms/HeroeImg';
import HeroeBio from '../atoms/HeroeBio';
import HeroeStats from '../atoms/HeroeStats';
import HeroeWork from '../atoms/HeroeWork';
import Modal from '../molecules/Modal';

export default class HeroeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  closeModal() {
    this.setState({ show: false });
  }

  render() {
    const { stats, work, biography, name, src } =
      this.props;

    return (
      <>
        <button className="btn-default" onClick={this.showModal}>
          <div className="col-12 hero-card ">
            <HeroeImg src={src} onClick={this.showModal} />
          </div>

          <div className="col-12">
            <HeroeName name={name} />
          </div>
        </button>

        {this.state.show == true && (
          <>
            <div className="container">
              <div className="row">
                <Modal show={this.state.show} handleClose={this.closeModal}>
                  <div className="col-12">
                    <div className="row">
                      <HeroeName name={name} />
                      <HeroeImg src={src} />
                      <HeroeBio biography={biography} />
                    </div>
                    <div className="container">
                      <div className="col-12">
                        <div className="row">
                          <HeroeWork work={work} />
                          <HeroeStats stats={stats} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
