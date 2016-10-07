
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, View } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class NHButton extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title>Button</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Card style={styles.mb20}>
            <CardItem header>
              <Text>Block Button</Text>
            </CardItem>
            <CardItem>
              <Button block capitalize primary style={styles.mb15}>Capitalize Primary</Button>
              <Button block success style={styles.mb15}>Success</Button>
              <Button block info style={styles.mb15}>Info</Button>
              <Button block warning style={styles.mb15}>Warning</Button>
              <Button block danger style={styles.mb15}>Danger</Button>
              <Button block disabled style={styles.mb15}>Disabled</Button>
            </CardItem>
          </Card>

          <Card style={styles.mb20}>
            <CardItem header>
              <Text>Button Theme</Text>
            </CardItem>
            <CardItem>
              <Button primary style={styles.mb15}>Primary</Button>
              <Button success style={styles.mb15}>Success</Button>
              <Button info style={styles.mb15}>Info</Button>
              <Button warning style={styles.mb15}>Warning</Button>
              <Button danger style={styles.mb15}>Danger</Button>
              <Button disabled style={styles.mb15}>Disabled</Button>
            </CardItem>
          </Card>

          <Card style={styles.mb20}>
            <CardItem header>
              <Text>Round Button</Text>
            </CardItem>
            <CardItem>
              <Button rounded primary style={styles.mb15}>Primary</Button>
              <Button rounded success style={styles.mb15}>Success</Button>
              <Button rounded info style={styles.mb15}>Info</Button>
              <Button rounded warning style={styles.mb15}>Warning</Button>
              <Button rounded danger style={styles.mb15}>Danger</Button>
              <Button rounded disabled style={styles.mb15}>Disabled</Button>
            </CardItem>
          </Card>

          <Card style={[styles.mb20, { flex: 0 }]}>
            <CardItem header>
              <Text>Outline Button</Text>
            </CardItem>
            <CardItem>
              <Button bordered style={styles.mb15}>Primary</Button>
              <Button bordered success style={styles.mb15}>Success</Button>
              <Button bordered info style={styles.mb15}>Info</Button>
              <Button bordered warning style={styles.mb15}>Warning</Button>
              <Button bordered danger style={styles.mb15}>Danger</Button>
            </CardItem>
          </Card>

          <Card style={[styles.mb20, { flex: 0 }]}>
            <CardItem header>
              <Text>Button Size</Text>
            </CardItem>
            <CardItem>
              <Button small style={styles.mb15}>Small</Button>
              <Button success style={styles.mb15}>Regular</Button>
              <Button warning large style={styles.mb15}>Large</Button>
            </CardItem>
          </Card>

          <Card style={[styles.mb20, { flex: 0 }]}>
            <CardItem header>
              <Text>Icon Button</Text>
            </CardItem>
            <CardItem>
              <View style={styles.buttonContainer}>
                <Button transparent>
                  <Icon name="ios-arrow-back" style={styles.iconButton} />
                </Button>
                <Button transparent>
                  <Icon name="ios-arrow-down" style={styles.iconButton} />
                </Button>
                <Button transparent>
                  <Icon name="ios-arrow-up" style={styles.iconButton} />
                </Button>
                <Button transparent>
                  <Icon name="ios-arrow-forward" style={styles.iconButton} />
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-undo-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-refresh-circle-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-share-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-close-circle-outline" style={styles.iconButton} />
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-fastforward-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-play" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-pause" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-rewind-outline" style={styles.iconButton} />
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button style={styles.margin}>
                  <Icon name="ios-bluetooth" />
                </Button>
                <Button style={styles.margin}>
                  <Icon name="ios-wifi" />
                </Button>
                <Button style={styles.margin}>
                  <Icon name="md-plane" />
                </Button>
              </View>
              <View style={[styles.buttonContainer, { marginTop: 20 }]}>
                <Button bordered style={[styles.margin, { borderColor: '#fff' }]}>
                  <Icon name="ios-thumbs-up" />
                  Like
                </Button>
                <Button bordered style={[styles.margin, { borderColor: '#fff' }]}>
                  <Icon name="ios-chatboxes" />
                  Comment
                </Button>
                <Button bordered style={[styles.margin, { borderColor: '#fff' }]}>
                  <Icon name="ios-share-alt" />
                  Share
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button bordered style={[styles.margin, { borderColor: '#fff' }]}>
                  <Icon name="ios-create-outline" />
                  Status
                </Button>
                <Button bordered style={[styles.margin, { borderColor: '#fff' }]}>
                  <Icon name="ios-camera" />
                  Photo
                </Button>
                <Button bordered style={[styles.margin, { borderColor: '#fff' }]}>
                  <Icon name="ios-pin" />
                  Check In
                </Button>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHButton);
