/* eslint-disable */
import type { Prisma, Post } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useCreatePost(options?: Omit<UseMutationOptions<Post, unknown, Prisma.PostCreateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.PostCreateArgs, Post>('Post', `${endpoint}/Post/create`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PostCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.PostCreateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>;
        },
    };
    return mutation;
}

export function useFindManyPost<T extends Prisma.PostFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>, options?: UseQueryOptions<Array<Prisma.PostGetPayload<T>>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Array<Prisma.PostGetPayload<T>>>('Post', `${endpoint}/Post/findMany`, args, options);
}

export function useFindUniquePost<T extends Prisma.PostFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>, options?: UseQueryOptions<Prisma.PostGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.PostGetPayload<T>>('Post', `${endpoint}/Post/findUnique`, args, options);
}

export function useFindFirstPost<T extends Prisma.PostFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>, options?: UseQueryOptions<Prisma.PostGetPayload<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.PostGetPayload<T>>('Post', `${endpoint}/Post/findFirst`, args, options);
}

export function useUpdatePost(options?: Omit<UseMutationOptions<Post, unknown, Prisma.PostUpdateArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.PostUpdateArgs, Post>('Post', `${endpoint}/Post/update`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PostUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.PostUpdateArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>;
        },
    };
    return mutation;
}

export function useUpdateManyPost(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PostUpdateManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.putMutation<Prisma.PostUpdateManyArgs, Prisma.BatchPayload>('Post', `${endpoint}/Post/updateMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PostUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertPost(options?: Omit<UseMutationOptions<Post, unknown, Prisma.PostUpsertArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.postMutation<Prisma.PostUpsertArgs, Post>('Post', `${endpoint}/Post/upsert`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PostUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostUpsertArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.PostUpsertArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeletePost(options?: Omit<UseMutationOptions<Post, unknown, Prisma.PostDeleteArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.PostDeleteArgs, Post>('Post', `${endpoint}/Post/delete`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PostDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>,
            options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.PostDeleteArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>;
        },
    };
    return mutation;
}

export function useDeleteManyPost(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PostDeleteManyArgs>, 'mutationFn'>, invalidateQueries: boolean = true) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation =
        request.deleteMutation<Prisma.PostDeleteManyArgs, Prisma.BatchPayload>('Post', `${endpoint}/Post/deleteMany`, options, invalidateQueries)
        ;
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.PostDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>,
            options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>>, 'mutationFn'>
        ) {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregatePost<T extends Prisma.PostAggregateArgs>(args: Prisma.SelectSubset<T, Prisma.PostAggregateArgs>, options?: UseQueryOptions<Prisma.GetPostAggregateType<T>>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<Prisma.GetPostAggregateType<T>>('Post', `${endpoint}/Post/aggregate`, args, options);
}

export function useGroupByPost<T extends Prisma.PostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    }[OrderFields]>(args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.PostGroupByArgs, OrderByArg> & InputErrors>, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<{} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors>('Post', `${endpoint}/Post/groupBy`, args, options);
}

export function useCountPost<T extends Prisma.PostCountArgs>(args?: Prisma.SelectSubset<T, Prisma.PostCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType> : number>) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.query<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType> : number>('Post', `${endpoint}/Post/count`, args, options);
}
