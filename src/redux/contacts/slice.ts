import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { IContact } from "types";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    fetchContacts: builder.query<IContact[], void>({
      query: () => ({ url: "contacts", method: "get" }),
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation<IContact, Omit<IContact, "id">>({
      query: (data) => ({
        url: "contacts",
        method: "post",
        data,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation<IContact, string>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Contacts"],
    }),
    updateContact: builder.mutation<
      IContact,
      { id: string; data: Partial<IContact> }
    >({
      query: ({ id, data }) => ({
        url: `contacts/${id}`,
        method: "patch",
        data,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
