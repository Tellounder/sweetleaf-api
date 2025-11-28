import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DesignBlockModel = runtime.Types.Result.DefaultSelection<Prisma.$DesignBlockPayload>;
export type AggregateDesignBlock = {
    _count: DesignBlockCountAggregateOutputType | null;
    _min: DesignBlockMinAggregateOutputType | null;
    _max: DesignBlockMaxAggregateOutputType | null;
};
export type DesignBlockMinAggregateOutputType = {
    id: string | null;
    blockKey: string | null;
    label: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignBlockMaxAggregateOutputType = {
    id: string | null;
    blockKey: string | null;
    label: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignBlockCountAggregateOutputType = {
    id: number;
    blockKey: number;
    label: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DesignBlockMinAggregateInputType = {
    id?: true;
    blockKey?: true;
    label?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignBlockMaxAggregateInputType = {
    id?: true;
    blockKey?: true;
    label?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignBlockCountAggregateInputType = {
    id?: true;
    blockKey?: true;
    label?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DesignBlockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignBlockWhereInput;
    orderBy?: Prisma.DesignBlockOrderByWithRelationInput | Prisma.DesignBlockOrderByWithRelationInput[];
    cursor?: Prisma.DesignBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DesignBlockCountAggregateInputType;
    _min?: DesignBlockMinAggregateInputType;
    _max?: DesignBlockMaxAggregateInputType;
};
export type GetDesignBlockAggregateType<T extends DesignBlockAggregateArgs> = {
    [P in keyof T & keyof AggregateDesignBlock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDesignBlock[P]> : Prisma.GetScalarType<T[P], AggregateDesignBlock[P]>;
};
export type DesignBlockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignBlockWhereInput;
    orderBy?: Prisma.DesignBlockOrderByWithAggregationInput | Prisma.DesignBlockOrderByWithAggregationInput[];
    by: Prisma.DesignBlockScalarFieldEnum[] | Prisma.DesignBlockScalarFieldEnum;
    having?: Prisma.DesignBlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DesignBlockCountAggregateInputType | true;
    _min?: DesignBlockMinAggregateInputType;
    _max?: DesignBlockMaxAggregateInputType;
};
export type DesignBlockGroupByOutputType = {
    id: string;
    blockKey: string;
    label: string;
    content: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: DesignBlockCountAggregateOutputType | null;
    _min: DesignBlockMinAggregateOutputType | null;
    _max: DesignBlockMaxAggregateOutputType | null;
};
type GetDesignBlockGroupByPayload<T extends DesignBlockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DesignBlockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DesignBlockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DesignBlockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DesignBlockGroupByOutputType[P]>;
}>>;
export type DesignBlockWhereInput = {
    AND?: Prisma.DesignBlockWhereInput | Prisma.DesignBlockWhereInput[];
    OR?: Prisma.DesignBlockWhereInput[];
    NOT?: Prisma.DesignBlockWhereInput | Prisma.DesignBlockWhereInput[];
    id?: Prisma.StringFilter<"DesignBlock"> | string;
    blockKey?: Prisma.StringFilter<"DesignBlock"> | string;
    label?: Prisma.StringFilter<"DesignBlock"> | string;
    content?: Prisma.JsonFilter<"DesignBlock">;
    createdAt?: Prisma.DateTimeFilter<"DesignBlock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignBlock"> | Date | string;
    publishStatus?: Prisma.XOR<Prisma.PublishStatusNullableScalarRelationFilter, Prisma.PublishStatusWhereInput> | null;
};
export type DesignBlockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    blockKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    publishStatus?: Prisma.PublishStatusOrderByWithRelationInput;
};
export type DesignBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    blockKey?: string;
    AND?: Prisma.DesignBlockWhereInput | Prisma.DesignBlockWhereInput[];
    OR?: Prisma.DesignBlockWhereInput[];
    NOT?: Prisma.DesignBlockWhereInput | Prisma.DesignBlockWhereInput[];
    label?: Prisma.StringFilter<"DesignBlock"> | string;
    content?: Prisma.JsonFilter<"DesignBlock">;
    createdAt?: Prisma.DateTimeFilter<"DesignBlock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignBlock"> | Date | string;
    publishStatus?: Prisma.XOR<Prisma.PublishStatusNullableScalarRelationFilter, Prisma.PublishStatusWhereInput> | null;
}, "id" | "blockKey">;
export type DesignBlockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    blockKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DesignBlockCountOrderByAggregateInput;
    _max?: Prisma.DesignBlockMaxOrderByAggregateInput;
    _min?: Prisma.DesignBlockMinOrderByAggregateInput;
};
export type DesignBlockScalarWhereWithAggregatesInput = {
    AND?: Prisma.DesignBlockScalarWhereWithAggregatesInput | Prisma.DesignBlockScalarWhereWithAggregatesInput[];
    OR?: Prisma.DesignBlockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DesignBlockScalarWhereWithAggregatesInput | Prisma.DesignBlockScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DesignBlock"> | string;
    blockKey?: Prisma.StringWithAggregatesFilter<"DesignBlock"> | string;
    label?: Prisma.StringWithAggregatesFilter<"DesignBlock"> | string;
    content?: Prisma.JsonWithAggregatesFilter<"DesignBlock">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DesignBlock"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DesignBlock"> | Date | string;
};
export type DesignBlockCreateInput = {
    id?: string;
    blockKey: string;
    label: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    publishStatus?: Prisma.PublishStatusCreateNestedOneWithoutBlockInput;
};
export type DesignBlockUncheckedCreateInput = {
    id?: string;
    blockKey: string;
    label: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    publishStatus?: Prisma.PublishStatusUncheckedCreateNestedOneWithoutBlockInput;
};
export type DesignBlockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    publishStatus?: Prisma.PublishStatusUpdateOneWithoutBlockNestedInput;
};
export type DesignBlockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    publishStatus?: Prisma.PublishStatusUncheckedUpdateOneWithoutBlockNestedInput;
};
export type DesignBlockCreateManyInput = {
    id?: string;
    blockKey: string;
    label: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignBlockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignBlockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignBlockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    blockKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignBlockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    blockKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignBlockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    blockKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignBlockScalarRelationFilter = {
    is?: Prisma.DesignBlockWhereInput;
    isNot?: Prisma.DesignBlockWhereInput;
};
export type DesignBlockCreateNestedOneWithoutPublishStatusInput = {
    create?: Prisma.XOR<Prisma.DesignBlockCreateWithoutPublishStatusInput, Prisma.DesignBlockUncheckedCreateWithoutPublishStatusInput>;
    connectOrCreate?: Prisma.DesignBlockCreateOrConnectWithoutPublishStatusInput;
    connect?: Prisma.DesignBlockWhereUniqueInput;
};
export type DesignBlockUpdateOneRequiredWithoutPublishStatusNestedInput = {
    create?: Prisma.XOR<Prisma.DesignBlockCreateWithoutPublishStatusInput, Prisma.DesignBlockUncheckedCreateWithoutPublishStatusInput>;
    connectOrCreate?: Prisma.DesignBlockCreateOrConnectWithoutPublishStatusInput;
    upsert?: Prisma.DesignBlockUpsertWithoutPublishStatusInput;
    connect?: Prisma.DesignBlockWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DesignBlockUpdateToOneWithWhereWithoutPublishStatusInput, Prisma.DesignBlockUpdateWithoutPublishStatusInput>, Prisma.DesignBlockUncheckedUpdateWithoutPublishStatusInput>;
};
export type DesignBlockCreateWithoutPublishStatusInput = {
    id?: string;
    blockKey: string;
    label: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignBlockUncheckedCreateWithoutPublishStatusInput = {
    id?: string;
    blockKey: string;
    label: string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignBlockCreateOrConnectWithoutPublishStatusInput = {
    where: Prisma.DesignBlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignBlockCreateWithoutPublishStatusInput, Prisma.DesignBlockUncheckedCreateWithoutPublishStatusInput>;
};
export type DesignBlockUpsertWithoutPublishStatusInput = {
    update: Prisma.XOR<Prisma.DesignBlockUpdateWithoutPublishStatusInput, Prisma.DesignBlockUncheckedUpdateWithoutPublishStatusInput>;
    create: Prisma.XOR<Prisma.DesignBlockCreateWithoutPublishStatusInput, Prisma.DesignBlockUncheckedCreateWithoutPublishStatusInput>;
    where?: Prisma.DesignBlockWhereInput;
};
export type DesignBlockUpdateToOneWithWhereWithoutPublishStatusInput = {
    where?: Prisma.DesignBlockWhereInput;
    data: Prisma.XOR<Prisma.DesignBlockUpdateWithoutPublishStatusInput, Prisma.DesignBlockUncheckedUpdateWithoutPublishStatusInput>;
};
export type DesignBlockUpdateWithoutPublishStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignBlockUncheckedUpdateWithoutPublishStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    blockKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignBlockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    blockKey?: boolean;
    label?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    publishStatus?: boolean | Prisma.DesignBlock$publishStatusArgs<ExtArgs>;
}, ExtArgs["result"]["designBlock"]>;
export type DesignBlockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    blockKey?: boolean;
    label?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["designBlock"]>;
export type DesignBlockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    blockKey?: boolean;
    label?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["designBlock"]>;
export type DesignBlockSelectScalar = {
    id?: boolean;
    blockKey?: boolean;
    label?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DesignBlockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "blockKey" | "label" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["designBlock"]>;
export type DesignBlockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    publishStatus?: boolean | Prisma.DesignBlock$publishStatusArgs<ExtArgs>;
};
export type DesignBlockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DesignBlockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DesignBlockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DesignBlock";
    objects: {
        publishStatus: Prisma.$PublishStatusPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        blockKey: string;
        label: string;
        content: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["designBlock"]>;
    composites: {};
};
export type DesignBlockGetPayload<S extends boolean | null | undefined | DesignBlockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload, S>;
export type DesignBlockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DesignBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DesignBlockCountAggregateInputType | true;
};
export interface DesignBlockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DesignBlock'];
        meta: {
            name: 'DesignBlock';
        };
    };
    findUnique<T extends DesignBlockFindUniqueArgs>(args: Prisma.SelectSubset<T, DesignBlockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DesignBlockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DesignBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DesignBlockFindFirstArgs>(args?: Prisma.SelectSubset<T, DesignBlockFindFirstArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DesignBlockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DesignBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DesignBlockFindManyArgs>(args?: Prisma.SelectSubset<T, DesignBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DesignBlockCreateArgs>(args: Prisma.SelectSubset<T, DesignBlockCreateArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DesignBlockCreateManyArgs>(args?: Prisma.SelectSubset<T, DesignBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DesignBlockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DesignBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DesignBlockDeleteArgs>(args: Prisma.SelectSubset<T, DesignBlockDeleteArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DesignBlockUpdateArgs>(args: Prisma.SelectSubset<T, DesignBlockUpdateArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DesignBlockDeleteManyArgs>(args?: Prisma.SelectSubset<T, DesignBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DesignBlockUpdateManyArgs>(args: Prisma.SelectSubset<T, DesignBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DesignBlockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DesignBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DesignBlockUpsertArgs>(args: Prisma.SelectSubset<T, DesignBlockUpsertArgs<ExtArgs>>): Prisma.Prisma__DesignBlockClient<runtime.Types.Result.GetResult<Prisma.$DesignBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DesignBlockCountArgs>(args?: Prisma.Subset<T, DesignBlockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DesignBlockCountAggregateOutputType> : number>;
    aggregate<T extends DesignBlockAggregateArgs>(args: Prisma.Subset<T, DesignBlockAggregateArgs>): Prisma.PrismaPromise<GetDesignBlockAggregateType<T>>;
    groupBy<T extends DesignBlockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DesignBlockGroupByArgs['orderBy'];
    } : {
        orderBy?: DesignBlockGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DesignBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DesignBlockFieldRefs;
}
export interface Prisma__DesignBlockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    publishStatus<T extends Prisma.DesignBlock$publishStatusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignBlock$publishStatusArgs<ExtArgs>>): Prisma.Prisma__PublishStatusClient<runtime.Types.Result.GetResult<Prisma.$PublishStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DesignBlockFieldRefs {
    readonly id: Prisma.FieldRef<"DesignBlock", 'String'>;
    readonly blockKey: Prisma.FieldRef<"DesignBlock", 'String'>;
    readonly label: Prisma.FieldRef<"DesignBlock", 'String'>;
    readonly content: Prisma.FieldRef<"DesignBlock", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"DesignBlock", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DesignBlock", 'DateTime'>;
}
export type DesignBlockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    where: Prisma.DesignBlockWhereUniqueInput;
};
export type DesignBlockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    where: Prisma.DesignBlockWhereUniqueInput;
};
export type DesignBlockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    where?: Prisma.DesignBlockWhereInput;
    orderBy?: Prisma.DesignBlockOrderByWithRelationInput | Prisma.DesignBlockOrderByWithRelationInput[];
    cursor?: Prisma.DesignBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignBlockScalarFieldEnum | Prisma.DesignBlockScalarFieldEnum[];
};
export type DesignBlockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    where?: Prisma.DesignBlockWhereInput;
    orderBy?: Prisma.DesignBlockOrderByWithRelationInput | Prisma.DesignBlockOrderByWithRelationInput[];
    cursor?: Prisma.DesignBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignBlockScalarFieldEnum | Prisma.DesignBlockScalarFieldEnum[];
};
export type DesignBlockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    where?: Prisma.DesignBlockWhereInput;
    orderBy?: Prisma.DesignBlockOrderByWithRelationInput | Prisma.DesignBlockOrderByWithRelationInput[];
    cursor?: Prisma.DesignBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignBlockScalarFieldEnum | Prisma.DesignBlockScalarFieldEnum[];
};
export type DesignBlockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignBlockCreateInput, Prisma.DesignBlockUncheckedCreateInput>;
};
export type DesignBlockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DesignBlockCreateManyInput | Prisma.DesignBlockCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignBlockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    data: Prisma.DesignBlockCreateManyInput | Prisma.DesignBlockCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignBlockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignBlockUpdateInput, Prisma.DesignBlockUncheckedUpdateInput>;
    where: Prisma.DesignBlockWhereUniqueInput;
};
export type DesignBlockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DesignBlockUpdateManyMutationInput, Prisma.DesignBlockUncheckedUpdateManyInput>;
    where?: Prisma.DesignBlockWhereInput;
    limit?: number;
};
export type DesignBlockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignBlockUpdateManyMutationInput, Prisma.DesignBlockUncheckedUpdateManyInput>;
    where?: Prisma.DesignBlockWhereInput;
    limit?: number;
};
export type DesignBlockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    where: Prisma.DesignBlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignBlockCreateInput, Prisma.DesignBlockUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DesignBlockUpdateInput, Prisma.DesignBlockUncheckedUpdateInput>;
};
export type DesignBlockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
    where: Prisma.DesignBlockWhereUniqueInput;
};
export type DesignBlockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignBlockWhereInput;
    limit?: number;
};
export type DesignBlock$publishStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublishStatusSelect<ExtArgs> | null;
    omit?: Prisma.PublishStatusOmit<ExtArgs> | null;
    include?: Prisma.PublishStatusInclude<ExtArgs> | null;
    where?: Prisma.PublishStatusWhereInput;
};
export type DesignBlockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignBlockSelect<ExtArgs> | null;
    omit?: Prisma.DesignBlockOmit<ExtArgs> | null;
    include?: Prisma.DesignBlockInclude<ExtArgs> | null;
};
export {};
