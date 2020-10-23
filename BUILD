load("@npm_angular_bazel//:index.bzl", "ng_module")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")

package(default_visibility = ["//visibility:public"])

ng_module(
    name = "hello",
    srcs = [
        "hello.ts",
        "hello_module.ts",
    ],
    assets = [
        ":hello_css",
        "hello.ng.html",
    ],
    deps = [
        "@npm//@angular/core",
        "@npm//@angular/material",
    ],
)

sass_binary(
    name = "hello_css",
    src = "hello.scss",
    sourcemap = False,
)
