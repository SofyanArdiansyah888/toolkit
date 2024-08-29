// @ts-ignore
import {create, destroy, getDetail, getList, update} from "@lib/api"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

interface IGet {
    name: string;
    endpoint: string;
    params: object;
}


export function useGetList<T>({
                                  name,
                                  endpoint,
                                  params
                              }: IGet) {

    return useQuery<T>({
        queryKey: [name, params],
        queryFn: async ({queryKey}) => await getList(endpoint, queryKey[1]),
    });
}


interface IGetDetail extends Omit<IGet, "params"> {
    id: string
}

export function useGetDetail<T>({
                                    name,
                                    endpoint,
                                    id
                                }: IGetDetail) {

    return useQuery<T>({
        queryKey: [name, id],
        queryFn: async ({queryKey}) => await getDetail<T>(endpoint, queryKey[1] as string),
    });
}

interface IPOST {
    name: string;
    endpoint: string;
    onSuccess?: (result: any) => void,
    onError?: (error: Error) => void,
    withMessage?: boolean,
    successMessage?: string,
    errorMessage?: string
}


export function usePost({
                            name,
                            endpoint,
                            onError,
                            onSuccess
                        }: IPOST) {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({
                queryKey: [name]
            })
            if (onSuccess) {
                onSuccess(data)
                return;
            }
        },
        onError: async (error) => {
            if (onError) {
                onError(error)
                return
            }
        },
        mutationFn: (data) => {
            return create(endpoint, data)
        },
    })
}

export function usePut({
                           name,
                           endpoint,
                           id,
                           onError,
                           onSuccess
                       }: IPOST & { id: string | number | undefined }) {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({
                queryKey: [name]
            })
            if (onSuccess) {
                onSuccess(data)
                return;
            }

        },
        onError: async (error) => {
            if (onError) {
                onError(error)
                return
            }
        },
        mutationFn: (data) => {
            return update(id, endpoint, data)
        },
    })
}


interface IExport extends IPOST {
    filename: string
}

export function useExport({
                              name,
                              endpoint,
                              onError,
                              onSuccess,
                              filename
                          }: IExport) {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({
                queryKey: [name]
            })

            const url = window.URL.createObjectURL(new Blob([data as BlobPart]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            if (onSuccess) {
                onSuccess(data)
                return;
            }

        },
        onError: async (error) => {
            if (onError) {
                onError(error)
                return
            }
        },
        mutationFn: (data) => {
            return create(endpoint, data, 'blob')
        },
    })
}

export function useDelete({
                              name,
                              endpoint,
                              onSuccess,
                              onError
                          }: IPOST) {
    const queryClient = useQueryClient()
    return useMutation({
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({
                queryKey: [name]
            })
            if (onSuccess) {
                onSuccess(data)
                return;
            }
        },
        onError: async (error) => {
            if (onError) {
                onError(error)
                return
            }
        },
        mutationFn: (id: string) => {
            return destroy(id, endpoint)
        },
    })
}

