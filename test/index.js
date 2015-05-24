'use strict'

import test from 'tape'
import randomUrl from '../'

test((t) => {
  t.ok(/^http\:\/\//.test(randomUrl()))
  t.ok(/^https\:\/\//.test(randomUrl('https')))
  t.notEqual(randomUrl(), randomUrl())
  t.end()
})
