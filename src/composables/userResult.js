import { shallowReactive, toRefs } from "vue";
import Utils from "../helpers/Utils";
import { api } from "../boot/axios";

export default function userResult() {
  const state = shallowReactive({
    loading: false,
    saving: false,
    deleting: false,
    items: [],
  });

  const columns = [
    {
      name: "sl",
      label: "#",
      required: true,
      field: (row) => row.id,
      align: "left",
      sortable: false,
    },
    {
      name: "name",
      label: "NAME",
      required: true,
      field: (row) => row.name,
      align: "center",
      sortable: true,
    },
    {
      name: "email",
      label: "EMAIL",
      required: true,
      field: (row) => row.email,
      align: "center",
      sortable: true,
    },
    {
      name: "roles.name",
      label: "Roles",
      required: true,
      field: (row) => row?.roles?.map((role) => role.name).join(", "),
      align: "center",
      sortable: true,
    },
    {
      name: "created_at",
      label: "CREATED AT",
      required: true,
      field: (row) => row.created_at,
      align: "center",
      sortable: true,
    },
    {
      name: "enable_ga",
      label: "google authenticator",
      required: false,
      field: (row) => row.enable_ga,
      align: "center",
      sortable: false,
    },
    {
      name: "actions",
      label: "ACTIONS",
      required: true,
      field: (row) => row,
      align: "center",
    },
  ];

  const add = async (data) => {
    try {
      state.saving = true;
     const response =   await api.post("/result", data);
     return response.data;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.saving = false;
    }
  };
  const addResult = async (data) => {
    try {
      state.saving = true;
      let response = await api.post("/config/add", data);
      return response.data;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.saving = false;
      
    }
  };
  const updateResult = async (data) => {
    try {
      state.saving = true;
      await api.post("/config/update", data);
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.saving = false;
      
    }
  };

  const getResult = async (deskName, bootNum) => {
    try {
      state.saving = true;
      let res = await api.post(`config/search?deskName=${deskName}&bootNum=${bootNum}`);
      return res.data;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.saving = false;
    }
  };
  

  const update = async (id, data) => {
    try {
      state.saving = true;
      await api.patch(`/result/${id}`, data);
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.saving = false;
    }
  };

  const trash = async (id, params = "") => {
    try {
      state.deleting = true;
      await api.delete(`/result/${id}?${params}`);
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.deleting = false;
    }
  };

  const get = async (id) => {
    try {
      state.loading = true;
      await api.get(`/result/${id}`);
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.loading = false;
    }
  };

  const paginate = async (props) => {
    state.loading = true;
    let params =
      props.filter !== undefined
        ? Object.assign(props.pagination, { ...props.filter })
        : props.pagination;
    try {
      const response = await api.get("/result/paginate", { params });
      state.items = response.data.data;
      state.loading = false;
      // console.log(response);
      return response;
    } catch (err) {
      state.loading = false;
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const all = async () => {
    try {
      const response = await api.get("/result/all");
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };



  return {
    ...toRefs(state),
    columns,
    add,
    get,
    update,
    trash,
    paginate,
    all,
    addResult,
    updateResult,
    getResult,
  };
}
