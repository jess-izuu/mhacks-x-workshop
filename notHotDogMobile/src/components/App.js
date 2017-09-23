import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image,  ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';

import { checkHotDog, setHotDogNull } from '../actions/HotDogActions';
import hotDogImage from '../images/hotDog.png';
import notHotDogImage from '../images/notHotDog.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderImage = this.renderImage.bind(this);
  }

  renderImage() {
    console.log('renderImage: ', this.props.isHotDog);
    switch (this.props.isHotDog) {
      case 0:
        console.log('RETURN NULL')
        return null;
      case 1:
        return (
          <Image
            style={styles.hotdog}
            source={hotDogImage}
          />
        );
      case 2:
        return (
          <Image
            style={styles.hotdog}
            source={notHotDogImage}
          />
        );
      default:
        return null;
    }
  }

  renderLoading() {
    if (this.props.loading) {
      return <ActivityIndicator size='large' />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(camera) => { this.camera = camera }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.temp}
        >
          <TouchableOpacity
            style={styles.capture}
            onPress={() => this.checkPicture()}
          >
            {this.renderLoading()}
          </TouchableOpacity>
          <View style={styles.container}>
            {this.renderImage()}
          </View>
        </Camera>
      </View>
    );
  }

  checkPicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
        this.props.setHotDogNull();
        this.props.checkHotDog(data.path);
        setInterval(() => this.props.setHotDogNull(), 10000);
      })
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  hotdog: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    height: 200,
    margin: 40,
    width: 200,
    resizeMode: 'contain'
  },
  capture: {
    flex: 0,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    bottom: 30
  }
});

const mapStateToProps = ({ hotDog }) => {
  console.log('STATE: ',  hotDog);
  const { isHotDog, loading } = hotDog;
  return { isHotDog, loading };
};

export default connect(mapStateToProps, { checkHotDog, setHotDogNull })(App);
