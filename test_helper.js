/** Created by hhj on 8/18/16. */
import chai from 'chai'

// ignore import and require of these extensions on server (in node; deprecated but still functional):
const ignoreRequireExtensions = ['.scss', '.sass', '.css', '.less', '.styl', '.png', '.jpg', '.gif']
ignoreRequireExtensions.forEach((ext) => {
  require.extensions[ext] = () => {   // eslint-disable-line arrow-body-style
  }
})
