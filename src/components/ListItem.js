import React, {Component} from 'react'
import { connect } from 'react-redux'
import {CardSection} from './common'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native'
import * as actions from '../actions'

class ListItem extends Component{

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  renderDescription() {
    const {expanded, library} = this.props
    console.log(expanded)
    if (expanded) {
      return (
          <CardSection>
            <Text style={{flex: 1}}>
              {library.item.description}
            </Text>
          </CardSection>
      )
    }

  }
  render() {
    console.log(this.props)
    const { text } = styles
    const {id, title} = this.props.library.item
    return (
        <TouchableWithoutFeedback
            onPress={() => {
              return this.props.selectLibrary(id)}}
        >
          <View>
            <CardSection>
              <Text style={text}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

const mapStateToProps = (state, ownProps)  => {
  const expanded = state.selected === ownProps.library.item.id
  return {
    selected: state.selected,
    expanded: expanded
  }
}

export default connect(mapStateToProps, actions)(ListItem)