import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});

export const sendImage = mutation({
    args: { storageId: v.string() },
    handler: async (ctx, args) => {
      await ctx.db.insert("messages", {
        body: args.storageId,
        format: "image",
      });
    },
});