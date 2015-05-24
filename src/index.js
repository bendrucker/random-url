'use strict'

import cuid from 'cuid'

export default function randomUrl (protocol = 'http') {
  return `${protocol}://${cuid()}` // eslint-disable-line no-undef
}
