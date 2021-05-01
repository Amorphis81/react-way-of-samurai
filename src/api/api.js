import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '260cf9b1-64cd-48df-8146-63bfe74b0e71'
  }
})

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow (id) {
    return instance.post(`follow/${id}`, {}).then(response => response.data)
  },
  unfollow (id) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  }
}

export const headerAPI = {
  getAuth () {
    return instance.get(`auth/me`).then(response => response.data)
  },
}

export const profileAPI = {
  getProfile (userId) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },
}