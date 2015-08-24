var setImmediate = require('timers').setImmediate

module.exports = function afterward (done, cb) {
    cb = cb || function () {}
    done.then(function (value) {
        setImmediate(cb, null, value)
    })
    done.catch(function (err) {
        setImmediate(cb, err || new Error('rejected with no reason'))
    })
    return done
}
