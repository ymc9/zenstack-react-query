/* eslint-disable */
import type { Prisma, User } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useCreateUser(options?: Omit<UseMutationOptions<User, unknown, Prisma.UserCreateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.UserCreateArgs, User>('User', `${endpoint}/User/create`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.UserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.UserCreateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>;
        },
    };
    return mutation;
}

export function useFindManyUser<T extends Prisma.UserFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>, options?: UseQueryOptions<Array<Prisma.UserGetPayload<T>>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Array<Prisma.UserGetPayload<T>>>('User', `${endpoint}/User/findMany`, args, options);
}

export function useFindUniqueUser<T extends Prisma.UserFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>, options?: UseQueryOptions<Prisma.UserGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.UserGetPayload<T>>('User', `${endpoint}/User/findUnique`, args, options);
}

export function useFindFirstUser<T extends Prisma.UserFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>, options?: UseQueryOptions<Prisma.UserGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.UserGetPayload<T>>('User', `${endpoint}/User/findFirst`, args, options);
}

export function useUpdateUser(options?: Omit<UseMutationOptions<User, unknown, Prisma.UserUpdateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.UserUpdateArgs, User>('User', `${endpoint}/User/update`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.UserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.UserUpdateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>;
        },
    };
    return mutation;
}

export function useUpdateManyUser(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.UserUpdateManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.UserUpdateManyArgs, Prisma.BatchPayload>('User', `${endpoint}/User/updateMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.UserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertUser(options?: Omit<UseMutationOptions<User, unknown, Prisma.UserUpsertArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.UserUpsertArgs, User>('User', `${endpoint}/User/upsert`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.UserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUpsertArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.UserUpsertArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeleteUser(options?: Omit<UseMutationOptions<User, unknown, Prisma.UserDeleteArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.UserDeleteArgs, User>('User', `${endpoint}/User/delete`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.UserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.UserDeleteArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeleteManyUser(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.UserDeleteManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.UserDeleteManyArgs, Prisma.BatchPayload>('User', `${endpoint}/User/deleteMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.UserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateUser<T extends Prisma.UserAggregateArgs>(args: Prisma.SelectSubset<T, Prisma.UserAggregateArgs>, options?: UseQueryOptions<Prisma.GetUserAggregateType<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.GetUserAggregateType<T>>('User', `${endpoint}/User/aggregate`, args, options);
}

export function useGroupByUser<T extends Prisma.UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]>(args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors>, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<{} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors>('User', `${endpoint}/User/groupBy`, args, options);
}

export function useCountUser<T extends Prisma.UserCountArgs>(args?: Prisma.SelectSubset<T, Prisma.UserCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number>('User', `${endpoint}/User/count`, args, options);
}
