/* eslint-disable */
import type { Prisma, Account } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useCreateAccount(options?: Omit<UseMutationOptions<Account, unknown, Prisma.AccountCreateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.AccountCreateArgs, Account>('Account', `${endpoint}/Account/create`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.AccountCreateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>;
        },
    };
    return mutation;
}

export function useFindManyAccount<T extends Prisma.AccountFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>, options?: UseQueryOptions<Array<Prisma.AccountGetPayload<T>>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Array<Prisma.AccountGetPayload<T>>>('Account', `${endpoint}/Account/findMany`, args, options);
}

export function useFindUniqueAccount<T extends Prisma.AccountFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>, options?: UseQueryOptions<Prisma.AccountGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.AccountGetPayload<T>>('Account', `${endpoint}/Account/findUnique`, args, options);
}

export function useFindFirstAccount<T extends Prisma.AccountFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>, options?: UseQueryOptions<Prisma.AccountGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.AccountGetPayload<T>>('Account', `${endpoint}/Account/findFirst`, args, options);
}

export function useUpdateAccount(options?: Omit<UseMutationOptions<Account, unknown, Prisma.AccountUpdateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.AccountUpdateArgs, Account>('Account', `${endpoint}/Account/update`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>;
        },
    };
    return mutation;
}

export function useUpdateManyAccount(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountUpdateManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.AccountUpdateManyArgs, Prisma.BatchPayload>('Account', `${endpoint}/Account/updateMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertAccount(options?: Omit<UseMutationOptions<Account, unknown, Prisma.AccountUpsertArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.AccountUpsertArgs, Account>('Account', `${endpoint}/Account/upsert`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeleteAccount(options?: Omit<UseMutationOptions<Account, unknown, Prisma.AccountDeleteArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.AccountDeleteArgs, Account>('Account', `${endpoint}/Account/delete`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeleteManyAccount(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountDeleteManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.AccountDeleteManyArgs, Prisma.BatchPayload>('Account', `${endpoint}/Account/deleteMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateAccount<T extends Prisma.AccountAggregateArgs>(args: Prisma.SelectSubset<T, Prisma.AccountAggregateArgs>, options?: UseQueryOptions<Prisma.GetAccountAggregateType<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.GetAccountAggregateType<T>>('Account', `${endpoint}/Account/aggregate`, args, options);
}

export function useGroupByAccount<T extends Prisma.AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    }[OrderFields]>(args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors>, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<{} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors>('Account', `${endpoint}/Account/groupBy`, args, options);
}

export function useCountAccount<T extends Prisma.AccountCountArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number>('Account', `${endpoint}/Account/count`, args, options);
}
