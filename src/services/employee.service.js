import http from "../http-common"

class TutorialDataService {
    getAll() {
      return http.get("emp/employees");
    }
  
    get(id) {
      return http.get(`emp/employees/${id}`);
    }
  
    create(data) {
      return http.post("emp/employees", data);
    }
  
    update(id, data) {
      return http.put(`emp/employees/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`emp/employees/${id}`);
    }
  
  }
  
  export default new TutorialDataService();

