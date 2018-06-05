import React from 'react'
import PropTypes from 'prop-types'
import { PrivacyBotsPageTemplate } from '../../templates/page'

const PrivacyBotsPagePreview = ({ entry, widgetFor }) => (
  <PrivacyBotsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PrivacyBotsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PrivacyBotsPagePreview
