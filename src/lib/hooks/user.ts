/* eslint-disable */
import type { Prisma, User } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useUser() {
    const { endpoint } = useContext(RequestHandlerContext);

    function create<T extends Prisma.UserCreateArgs>(options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.UserCreateArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.UserCreateArgs>, Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>>(`${endpoint}/user/create`, options);
    }

    function findMany<T extends Prisma.UserFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>, options?: UseQueryOptions<Array<Prisma.UserGetPayload<T>>>) {
        return request.get<Array<Prisma.UserGetPayload<T>>>('User', `${endpoint}/user/findMany`, args, options);
    }

    function findUnique<T extends Prisma.UserFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>, options?: UseQueryOptions<Prisma.UserGetPayload<T>>) {
        return request.get<Prisma.UserGetPayload<T>>('User', `${endpoint}/user/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.UserFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>, options?: UseQueryOptions<Prisma.UserGetPayload<T>>) {
        return request.get<Prisma.UserGetPayload<T>>('User', `${endpoint}/user/findFirst`, args, options);
    }

    function update<T extends Prisma.UserUpdateArgs>(options?: Omit<UseMutationOptions<Prisma.UserGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.UserUpdateArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.UserUpdateArgs>, Prisma.UserGetPayload<T>>(`${endpoint}/user/update`, options);
    }

    function updateMany<T extends Prisma.UserUpdateManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/user/updateMany`, options);
    }

    function upsert<T extends Prisma.UserUpsertArgs>(options?: Omit<UseMutationOptions<Prisma.UserGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.UserUpsertArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.UserUpsertArgs>, Prisma.UserGetPayload<T>>(`${endpoint}/user/upsert`, options);
    }

    function del<T extends Prisma.UserDeleteArgs>(options?: Omit<UseMutationOptions<Prisma.UserGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.UserDeleteArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.UserDeleteArgs>, Prisma.UserGetPayload<T>>(`${endpoint}/user/delete`, options);
    }

    function deleteMany<T extends Prisma.UserDeleteManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>, Prisma.BatchPayload>(`${endpoint}/user/deleteMany`, options);
    }

    function aggregate<T extends Prisma.UserAggregateArgs>(args: Prisma.Subset<T, Prisma.UserAggregateArgs>, options?: UseQueryOptions<Prisma.GetUserAggregateType<T>>) {
        return request.get<Prisma.GetUserAggregateType<T>>('User', `${endpoint}/user/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors>('User', `${endpoint}/user/groupBy`, args, options);
    }

    function count<T extends Prisma.UserCountArgs>(args: Prisma.Subset<T, Prisma.UserCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number>('User', `${endpoint}/user/count`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
