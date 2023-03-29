/* eslint-disable */
import type { Prisma, Account } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import * as request from '@zenstackhq/react/runtime/react-query';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export function useAccount() {
    const { endpoint } = useContext(RequestHandlerContext);

    function create<T extends Prisma.AccountCreateArgs>(options?: Omit<UseMutationOptions<Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>, unknown, Prisma.SelectSubset<T, Prisma.AccountCreateArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.AccountCreateArgs>, Prisma.CheckSelect<T, Account, Prisma.AccountGetPayload<T>>>(`${endpoint}/account/create`, options);
    }

    function findMany<T extends Prisma.AccountFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>, options?: UseQueryOptions<Array<Prisma.AccountGetPayload<T>>>) {
        return request.get<Array<Prisma.AccountGetPayload<T>>>('Account', `${endpoint}/account/findMany`, args, options);
    }

    function findUnique<T extends Prisma.AccountFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>, options?: UseQueryOptions<Prisma.AccountGetPayload<T>>) {
        return request.get<Prisma.AccountGetPayload<T>>('Account', `${endpoint}/account/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.AccountFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>, options?: UseQueryOptions<Prisma.AccountGetPayload<T>>) {
        return request.get<Prisma.AccountGetPayload<T>>('Account', `${endpoint}/account/findFirst`, args, options);
    }

    function update<T extends Prisma.AccountUpdateArgs>(options?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>, Prisma.AccountGetPayload<T>>(`${endpoint}/account/update`, options);
    }

    function updateMany<T extends Prisma.AccountUpdateManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>>, 'mutationFn'>) {
        return request.putMutate<Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/account/updateMany`, options);
    }

    function upsert<T extends Prisma.AccountUpsertArgs>(options?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>>, 'mutationFn'>) {
        return request.postMutate<Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>, Prisma.AccountGetPayload<T>>(`${endpoint}/account/upsert`, options);
    }

    function del<T extends Prisma.AccountDeleteArgs>(options?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, unknown, Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>, Prisma.AccountGetPayload<T>>(`${endpoint}/account/delete`, options);
    }

    function deleteMany<T extends Prisma.AccountDeleteManyArgs>(options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>>, 'mutationFn'>) {
        return request.delMutate<Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>, Prisma.BatchPayload>(`${endpoint}/account/deleteMany`, options);
    }

    function aggregate<T extends Prisma.AccountAggregateArgs>(args: Prisma.Subset<T, Prisma.AccountAggregateArgs>, options?: UseQueryOptions<Prisma.GetAccountAggregateType<T>>) {
        return request.get<Prisma.GetAccountAggregateType<T>>('Account', `${endpoint}/account/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors, options?: UseQueryOptions<{} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetAccountGroupByPayload<T> : InputErrors>('Account', `${endpoint}/account/groupBy`, args, options);
    }

    function count<T extends Prisma.AccountCountArgs>(args: Prisma.Subset<T, Prisma.AccountCountArgs>, options?: UseQueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number>('Account', `${endpoint}/account/count`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
