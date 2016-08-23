/** Created by hhj on 8/23/16. */
import path from 'path'

const BASE_DIR = path.normalize(path.join(__dirname, '..'))

export default {
  BASE_DIR,
  DIST_DIR: path.join(BASE_DIR, 'dist'),
  PUBLIC_DIR: path.join(BASE_DIR, 'public')
}
