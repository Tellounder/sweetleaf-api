import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PublishStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$PublishStatusPayload>;
export type AggregatePublishStatus = {
    _count: PublishStatusCountAggregateOutputType | null;
    _avg: PublishStatusAvgAggregateOutputType | null;
    _sum: PublishStatusSumAggregateOutputType | null;
    _min: PublishStatusMinAggregateOutputType | null;
    _max: PublishStatusMaxAggregateOutputType | null;
};
export type PublishStatusAvgAggregateOutputType = {
    version: number | null;
};
export type PublishStatusSumAggregateOutputType = {
    version: number | null;
};
export type PublishStatusMinAggregateOutputType = {
    id: string | null;
    blockId: string | null;
    isPublished: boolean | null;
    version: number | null;
    publishedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PublishStatusMaxAggregateOutputType = {
    id: string | null;
    blockId: string | null;
    isPublished: boolean | null;
    version: number | null;
    publishedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PublishStatusCountAggregateOutputType = {
    id: number;
    blockId: number;
    isPublished: number;
    version: number;
    publishedBy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PublishStatusAvgAggregateInputType = {
    version?: true;
};
export type PublishStatusSumAggregateInputType = {
    version?: true;
};
export type PublishStatusMinAggregateInputType = {
    id?: true;
    blockId?: true;
    isPublished?: true;
    version?: true;
    publishedBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PublishStatusMaxAggregateInputType = {
    id?: true;
    blockId?: true;
    isPublished?: true;
    version?: true;
    publishedBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PublishStatusCountAggregateInputType = {
    id?: true;
    blockId?: true;
    isPublished?: true;
    version?: true;
    publishedBy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PublishStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublishStatusWhereInput;
    orderBy?: Prisma.PublishStatusOrderByWithRelationInput | Prisma.PublishStatusOrderByWithRelationInput[];
    cursor?: Prisma.PublishStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PublishStatusCountAggregateInputType;
    _avg?: PublishStatusAvgAggregateInputType;
    _sum?: PublishStatusSumAggregateInputType;
    _min?: PublishStatusMinAggregateInputType;
    _max?: PublishStatusMaxAggregateInputType;
};
export type GetPublishStatusAggregateType<T extends PublishStatusAggregateArgs> = {
    [P in keyof T & keyof AggregatePublishStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePublishStatus[P]> : Prisma.GetScalarType<T[P], AggregatePublishStatus[P]>;
};
export type PublishStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublishStatusWhereInput;
    orderBy?: Prisma.PublishStatusOrderByWithAggregationInput | Prisma.PublishStatusOrderByWithAggregationInput[];
    by: Prisma.PublishStatusScalarFieldEnum[] | Prisma.PublishStatusScalarFieldEnum;
    having?: Prisma.PublishStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PublishStatusCountAggregateInputType | true;
    _avg?: PublishStatusAvgAggregateInputType;
    _sum?: PublishStatusSumAggregateInputType;
    _min?: PublishStatusMinAggregateInputType;
    _max?: PublishStatusMaxAggregateInputType;
};
export type PublishStatusGroupByOutputType = {
    id: string;
    blockId: string;
    isPublished: boolean;
    version: number;
    publishedBy: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PublishStatusCountAggregateOutputType | null;
    _avg: PublishStatusAvgAggregateOutputType | null;
    _sum: PublishStatusSumAggregateOutputType | null;
    _min: PublishStatusMinAggregateOutputType | null;
    _max: PublishStatusMaxAggregateOutputType | null;
};
type GetPublishStatusGroupByPayload<T extends PublishStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PublishStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PublishStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PublishStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PublishStatusGroupByOutputType[P]>;
}>>;
export type PublishStatusWhereInput = {
    AND?: Prisma.PublishStatusWhereInput | Prisma.PublishStatusWhereInput[];
    OR?: Prisma.PublishStatusWhereInput[];
    NOT?: Prisma.PublishStatusWhereInput | Prisma.PublishStatusWhereInput[];
    id?: Prisma.StringFilter<"PublishStatus"> | string;
    blockId?: Prisma.StringFilter<"PublishStatus"> | string;
    isPublished?: Prisma.BoolFilter<"PublishStatus"> | boolean;
    version?: Prisma.IntFilter<"PublishStatus"> | number;
    publishedBy?: Prisma.StringNullableFilter<"PublishStatus"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PublishStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PublishStatus"> | Date | string;
    block?: Prisma.XOR<Prisma.DesignBlockScalarRelationFilter, Prisma.DesignBlockWhereInput>;
};
export type PublishStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    blockId?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    publishedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    block?: Prisma.DesignBlockOrderByWithRelationInput;
};
export type PublishStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    blockId?: string;
    AND?: Prisma.PublishStatusWhereInput | Prisma.PublishStatusWhereInput[];
    OR?: Prisma.PublishStatusWhereInput[];
    NOT?: Prisma.PublishStatusWhereInput | Prisma.PublishStatusWhereInput[];
    isPublished?: Prisma.BoolFilter<"PublishStatus"> | boolean;
    version?: Prisma.IntFilter<"PublishStatus"> | number;
    publishedBy?: Prisma.StringNullableFilter<"PublishStatus"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PublishStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PublishStatus"> | Date | string;
    block?: Prisma.XOR<Prisma.DesignBlockScalarRelationFilter, Prisma.DesignBlockWhereInput>;
}, "id" | "blockId">;
export type PublishStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    blockId?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    publishedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PublishStatusCountOrderByAggregateInput;
    _avg?: Prisma.PublishStatusAvgOrderByAggregateInput;
    _max?: Prisma.PublishStatusMaxOrderByAggregateInput;
    _min?: Prisma.PublishStatusMinOrderByAggregateInput;
    _sum?: Prisma.PublishStatusSumOrderByAggregateInput;
};
export type PublishStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.PublishStatusScalarWhereWithAggregatesInput | Prisma.PublishStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.PublishStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PublishStatusScalarWhereWithAggregatesInput | Prisma.PublishStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PublishStatus"> | string;
    blockId?: Prisma.StringWithAggregatesFilter<"PublishStatus"> | string;
    isPublished?: Prisma.BoolWithAggregatesFilter<"PublishStatus"> | boolean;
    version?: Prisma.IntWithAggregatesFilter<"PublishStatus"> | number;
    publishedBy?: Prisma.StringNullableWithAggregatesFilter<"PublishStatus"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PublishStatus"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PublishStatus"> | Date | string;
};
export type PublishStatusCreateInput = {
    id?: string;
    isPublished?: boolean;
    version?: number;
    publishedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    block: Prisma.DesignBlockCreateNestedOneWithoutPublishStatusInput;
};
export type PublishStatusUncheckedCreateInput = {
    id?: string;
    blockId: string;
    isPublished?: boolean;
    version?: number;
    publishedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PublishStatusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    block?: Prisma.DesignBlockUpdateOneRequiredWithoutPublishStatusNestedInput;
};
export type PublishStatusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockId?: Prisma.StringFieldUpdateOperationsInput | string;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublishStatusCreateManyInput = {
    id?: string;
    blockId: string;
    isPublished?: boolean;
    version?: number;
    publishedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PublishStatusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublishStatusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockId?: Prisma.StringFieldUpdateOperationsInput | string;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublishStatusNullableScalarRelationFilter = {
    is?: Prisma.PublishStatusWhereInput | null;
    isNot?: Prisma.PublishStatusWhereInput | null;
};
export type PublishStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    blockId?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    publishedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PublishStatusAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type PublishStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    blockId?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    publishedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PublishStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    blockId?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    publishedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PublishStatusSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type PublishStatusCreateNestedOneWithoutBlockInput = {
    create?: Prisma.XOR<Prisma.PublishStatusCreateWithoutBlockInput, Prisma.PublishStatusUncheckedCreateWithoutBlockInput>;
    connectOrCreate?: Prisma.PublishStatusCreateOrConnectWithoutBlockInput;
    connect?: Prisma.PublishStatusWhereUniqueInput;
};
export type PublishStatusUncheckedCreateNestedOneWithoutBlockInput = {
    create?: Prisma.XOR<Prisma.PublishStatusCreateWithoutBlockInput, Prisma.PublishStatusUncheckedCreateWithoutBlockInput>;
    connectOrCreate?: Prisma.PublishStatusCreateOrConnectWithoutBlockInput;
    connect?: Prisma.PublishStatusWhereUniqueInput;
};
export type PublishStatusUpdateOneWithoutBlockNestedInput = {
    create?: Prisma.XOR<Prisma.PublishStatusCreateWithoutBlockInput, Prisma.PublishStatusUncheckedCreateWithoutBlockInput>;
    connectOrCreate?: Prisma.PublishStatusCreateOrConnectWithoutBlockInput;
    upsert?: Prisma.PublishStatusUpsertWithoutBlockInput;
    disconnect?: Prisma.PublishStatusWhereInput | boolean;
    delete?: Prisma.PublishStatusWhereInput | boolean;
    connect?: Prisma.PublishStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PublishStatusUpdateToOneWithWhereWithoutBlockInput, Prisma.PublishStatusUpdateWithoutBlockInput>, Prisma.PublishStatusUncheckedUpdateWithoutBlockInput>;
};
export type PublishStatusUncheckedUpdateOneWithoutBlockNestedInput = {
    create?: Prisma.XOR<Prisma.PublishStatusCreateWithoutBlockInput, Prisma.PublishStatusUncheckedCreateWithoutBlockInput>;
    connectOrCreate?: Prisma.PublishStatusCreateOrConnectWithoutBlockInput;
    upsert?: Prisma.PublishStatusUpsertWithoutBlockInput;
    disconnect?: Prisma.PublishStatusWhereInput | boolean;
    delete?: Prisma.PublishStatusWhereInput | boolean;
    connect?: Prisma.PublishStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PublishStatusUpdateToOneWithWhereWithoutBlockInput, Prisma.PublishStatusUpdateWithoutBlockInput>, Prisma.PublishStatusUncheckedUpdateWithoutBlockInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PublishStatusCreateWithoutBlockInput = {
    id?: string;
    isPublished?: boolean;
    version?: number;
    publishedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PublishStatusUncheckedCreateWithoutBlockInput = {
    id?: string;
    isPublished?: boolean;
    version?: number;
    publishedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PublishStatusCreateOrConnectWithoutBlockInput = {
    where: Prisma.PublishStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublishStatusCreateWithoutBlockInput, Prisma.PublishStatusUncheckedCreateWithoutBlockInput>;
};
export type PublishStatusUpsertWithoutBlockInput = {
    update: Prisma.XOR<Prisma.PublishStatusUpdateWithoutBlockInput, Prisma.PublishStatusUncheckedUpdateWithoutBlockInput>;
    create: Prisma.XOR<Prisma.PublishStatusCreateWithoutBlockInput, Prisma.PublishStatusUncheckedCreateWithoutBlockInput>;
    where?: Prisma.PublishStatusWhereInput;
};
export type PublishStatusUpdateToOneWithWhereWithoutBlockInput = {
    where?: Prisma.PublishStatusWhereInput;
    data: Prisma.XOR<Prisma.PublishStatusUpdateWithoutBlockInput, Prisma.PublishStatusUncheckedUpdateWithoutBlockInput>;
};
export type PublishStatusUpdateWithoutBlockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublishStatusUncheckedUpdateWithoutBlockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublishStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    blockId?: boolean;
    isPublished?: boolean;
    version?: boolean;
    publishedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    block?: boolean | Prisma.DesignBlockDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["publishStatus"]>;
export type PublishStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    blockId?: boolean;
    isPublished?: boolean;
    version?: boolean;
    publishedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    block?: boolean | Prisma.DesignBlockDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["publishStatus"]>;
export type PublishStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    blockId?: boolean;
    isPublished?: boolean;
    version?: boolean;
    publishedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    block?: boolean | Prisma.DesignBlockDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["publishStatus"]>;
export type PublishStatusSelectScalar = {
    id?: boolean;
    blockId?: boolean;
    isPublished?: boolean;
    version?: boolean;
    publishedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PublishStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "blockId" | "isPublished" | "version" | "publishedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["publishStatus"]>;
export type PublishStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    block?: boolean | Prisma.DesignBlockDefaultArgs<ExtArgs>;
};
export type PublishStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    block?: boolean | Prisma.DesignBlockDefaultArgs<ExtArgs>;
};
export type PublishStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    block?: boolean | Prisma.DesignBlockDefaultArgs<ExtArgs>;
};
export type $PublishStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PublishStatus";
    objects: {
        block: Prisma.$DesignBlockPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        blockId: string;
        isPublished: boolean;
        version: number;
        publishedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["publishStatus"]>;
    composites: {};
};
export type PublishStatusGetPayload<S extends boolean | null | undefined | PublishStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload, S>;
export type PublishStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PublishStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PublishStatusCountAggregateInputType | true;
};
export interface PublishStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PublishStatus'];
        meta: {
            name: 'PublishStatus';
        };
    };
    findUnique<T extends PublishStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, PublishStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PublishStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PublishStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PublishStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, PublishStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PublishStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PublishStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PublishStatusFindManyArgs>(args?: Prisma.SelectSubset<T, PublishStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PublishStatusCreateArgs>(args: Prisma.SelectSubset<T, PublishStatusCreateArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PublishStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, PublishStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PublishStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PublishStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PublishStatusDeleteArgs>(args: Prisma.SelectSubset<T, PublishStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PublishStatusUpdateArgs>(args: Prisma.SelectSubset<T, PublishStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PublishStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, PublishStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PublishStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, PublishStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PublishStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PublishStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PublishStatusUpsertArgs>(args: Prisma.SelectSubset<T, PublishStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PublishStatusCountArgs>(args?: Prisma.Subset<T, PublishStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PublishStatusCountAggregateOutputType> : number>;
    aggregate<T extends PublishStatusAggregateArgs>(args: Prisma.Subset<T, PublishStatusAggregateArgs>): Prisma.PrismaPromise<GetPublishStatusAggregateType<T>>;
    groupBy<T extends PublishStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PublishStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: PublishStatusGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PublishStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublishStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PublishStatusFieldRefs;
}
export interface Prisma__PublishStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    block<T extends Prisma.DesignBlockDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignBlockDefaultArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PublishStatusFieldRefs {
    readonly id: Prisma.FieldRef<"PublishStatus", 'String'>;
    readonly blockId: Prisma.FieldRef<"PublishStatus", 'String'>;
    readonly isPublished: Prisma.FieldRef<"PublishStatus", 'Boolean'>;
    readonly version: Prisma.FieldRef<"PublishStatus", 'Int'>;
    readonly publishedBy: Prisma.FieldRef<"PublishStatus", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PublishStatus", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PublishStatus", 'DateTime'>;
}
export type PublishStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where: Prisma.PublishStatusWhereUniqueInput;
};
export type PublishStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where: Prisma.PublishStatusWhereUniqueInput;
};
export type PublishStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where?: Prisma.PublishStatusWhereInput;
    orderBy?: Prisma.PublishStatusOrderByWithRelationInput | Prisma.PublishStatusOrderByWithRelationInput[];
    cursor?: Prisma.PublishStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublishStatusScalarFieldEnum | Prisma.PublishStatusScalarFieldEnum[];
};
export type PublishStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where?: Prisma.PublishStatusWhereInput;
    orderBy?: Prisma.PublishStatusOrderByWithRelationInput | Prisma.PublishStatusOrderByWithRelationInput[];
    cursor?: Prisma.PublishStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublishStatusScalarFieldEnum | Prisma.PublishStatusScalarFieldEnum[];
};
export type PublishStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where?: Prisma.PublishStatusWhereInput;
    orderBy?: Prisma.PublishStatusOrderByWithRelationInput | Prisma.PublishStatusOrderByWithRelationInput[];
    cursor?: Prisma.PublishStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublishStatusScalarFieldEnum | Prisma.PublishStatusScalarFieldEnum[];
};
export type PublishStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublishStatusCreateInput, Prisma.PublishStatusUncheckedCreateInput>;
};
export type PublishStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PublishStatusCreateManyInput | Prisma.PublishStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PublishStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    data: Prisma.PublishStatusCreateManyInput | Prisma.PublishStatusCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PublishStatusIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PublishStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublishStatusUpdateInput, Prisma.PublishStatusUncheckedUpdateInput>;
    where: Prisma.PublishStatusWhereUniqueInput;
};
export type PublishStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PublishStatusUpdateManyMutationInput, Prisma.PublishStatusUncheckedUpdateManyInput>;
    where?: Prisma.PublishStatusWhereInput;
    limit?: number;
};
export type PublishStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublishStatusUpdateManyMutationInput, Prisma.PublishStatusUncheckedUpdateManyInput>;
    where?: Prisma.PublishStatusWhereInput;
    limit?: number;
    include?: Prisma.PublishStatusIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PublishStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where: Prisma.PublishStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublishStatusCreateInput, Prisma.PublishStatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PublishStatusUpdateInput, Prisma.PublishStatusUncheckedUpdateInput>;
};
export type PublishStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where: Prisma.PublishStatusWhereUniqueInput;
};
export type PublishStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublishStatusWhereInput;
    limit?: number;
};
export type PublishStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
};
export {};
