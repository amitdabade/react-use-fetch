import {
  JSON_TYPE,
  BLOB_TYPE,
  FORM_DATA_TYPE,
  TEXT_TYPE,
  ARRAY_BUFFER_TYPE,
} from "./../constants/constants";

export const parseResponse = (response, responseType) => {
  switch (responseType) {
    case JSON_TYPE:
      return response.json();

    case TEXT_TYPE:
      return response.text();

    case BLOB_TYPE:
      return response.blob();

    case FORM_DATA_TYPE:
      return response.formData();

    case ARRAY_BUFFER_TYPE:
      return response.arrayBuffer();

    default:
      return response.text();
  }
};
