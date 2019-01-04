import { User } from '../models/User'

export const getUserById = (id: number): User => {
    return {
        id: id,
        name: '一碗猪头肉',
        avatar: 'http://pic.youdushufang.com/FiMKlxdjSswwBNpNNXsfl3L5nwku?imageView2/1/w/640/h/640/format/jpg/q/75|imageslim',
    }
}
