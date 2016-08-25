/** Created by hhj on 8/25/16. */
export default function api(req, res, next) {
  res.status(503).send(JSON.stringify({
    message: 'under construction...'
  }))
}
