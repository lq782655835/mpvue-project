import request from './request'

export function getCNodeAllTab (param) {
    return request.get('topics', {
        tab: 'all',
        page: 1,
        limit: 5
    })
}
