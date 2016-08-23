/** Created by hhj on 8/23/16. */
import path from 'path'

const BASE_DIR = path.normalize(path.join(__dirname, '..'))

export default {
  BASE_DIR,
  BUILD_DIR: path.join(BASE_DIR, 'build'),
  PUBLIC_DIR: path.join(BASE_DIR, 'public'),
  NODE_MODULES_DIR: path.join(BASE_DIR, 'node_modules')
}
