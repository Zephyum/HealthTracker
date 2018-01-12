import _ from 'lodash'
import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItems from './ListItems'
import { entryFetch } from '../actions'

class LibraryList extends Component {
  componentWillMount() {
    this.props.entryFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ entries }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(entries)
  }

  renderRow(entry) {
    return <ListItem entry={entry}/>
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow} />
    )
  }
}

const mapStateToProps = state => {
  const entries = _.map(state.entries, (val, uid) => {
    return { ...val, uid }
  })

  return { entries }
}

export default connect(mapStateToProps, { entryFetch })(LibraryList)
