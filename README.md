# TS_hustle 🚀

A comprehensive repository documenting my hands-on journey through the TypeScript ecosystem. This project tracks my progress from core primitive types up to intermediate and advanced type mechanics, functions, object-oriented concepts, and async workflows.

---

## 🎯 Repository Purpose

The codebase serves as a structured reference and playground for mastering TypeScript's features. It focuses on:

- **Type Safety:** Moving from basic annotations to structural data handling.
- **Control Flow:** Practicing narrowing techniques and guards to safely handle data.
- **Clean Code:** Using modern object-oriented features and shorthand properties to keep things readable.

---

## 🛠️ Folder Breakdown

The files are organized into three primary sections:

### 📦 01. Types Essentials

Covers core foundations, variables, basic primitives, types like `any` and `unknown`, modules, literals, and assertions.

### 🛡️ 02. Data Contracts

Explores structured data matching including arrays, tuples, functions, custom types, interfaces, and control flow type guards.

### 🏗️ 03. System Architecture

Deep-dives into advanced features like generics, utility types, classes, access modifiers, promises, abstract patterns, and advanced type transformations.

---

## ⚙️ Compilation

This project runs a compiler pipeline mapping source (`src/`) TypeScript files straight into JavaScript distribution files (`dist/`).

### Start the compilation watcher:

```powershell
tsc -w

```

---

## 📂 Project Tree Structure

\_typescript-playground/TS*hustle/
└── src/
├── 01_types_essentials/
│ ├── 00_The_Foundations*&_Core_Shapes.md <- Core concepts blueprint 📑
│ ├── 01_inference.ts <- Implicit type deductions 🟢
│ ├── 02_primitives.ts <- number, string, boolean, symbol 🟢
│ ├── 03_special.ts <- any, void, null, undefined, never 🟢
│ ├── 04_objects.ts <- Structural shapes & annotations 🟢
│ ├── 05_literals.ts <- Exact value types 🟢
│ ├── 06_assertions.ts <- Force-casting with 'as' 🟢
│ ├── 07_as_const.ts <- Readonly literal type locking 🟢
│ ├── 08_unions.ts <- Disjoint value spaces (|) 🟢
│ ├── 09_intersections.ts <- Composing shapes together (&) 🟢
│ ├── 10_imports_&_exports.ts <- ES Modules & Type-only handling 🟢
│ └── 11_any_&_unknown.ts <- The safe top-type boundary check 🟢
│
├── 02_data_contracts/
│ ├── 00_Collections_Functions_&_Contracts.md <- Data contract manifest 📑
│ ├── 01_arrays_basics.ts <- Strongly typed collections 🟢
│ ├── 02_readonly_arrays.ts <- Immutability array bindings 🟢
│ ├── 03_tuples.ts <- Fixed-length positional arrays 🟢
│ ├── 04_functions_params.ts <- Structural parameter typing 🟢
│ ├── 05_optionals_defaults.ts <- Fallbacks & optional fields (?) 🟢
│ ├── 06_rest_tuples.ts <- Variadic parameter spreads 🟢
│ ├── 07_return_types.ts <- Signatures & compiler resolution 🟢
│ ├── 08_interfaces_basics.ts <- Object contract foundations 🟢
│ ├── 09_type_aliases.ts <- Custom combinatorial definitions 🟢
│ ├── 10_interfaces_vs_types.ts <- Merging capability vs Extensibility 🟢
│ ├── 11_index_signatures.ts <- Dynamic property dictionary bags 🟢
│ ├── 12_typeof.ts <- Extracting static metadata shapes 🟢
│ ├── 13_in_optional_nullish.ts <- Existential runtime safety checks 🟢
│ ├── 14_block2_capstone.ts <- Applied integration checkpoints 🟢
│ ├── 15_TypeNarrowing_&_TypeGuards.ts <- Primitive control flow defense 🟢
│ └── 16_type_predicates.ts <- Custom 'parameter is Type' validations 🟡
│
└── 03_system_architecture/
├── 00_Advanced_Architecture_&\_Classes.md <- Meta-programming guidelines 📑
├── 01_generics_intro.ts <- Abstract structural code reuse 🟢
├── 02_generics_constraints.ts <- Enforcement checks via 'extends' 🟢
├── 03_generics_get_set_prop.ts <- Dynamic lookup keys using 'keyof' 🟢
├── 04_utils_function_union_helpers.ts <- Built-in utility transformers 🟢
├── 05_util_union_helpers.ts <- Extract & Exclude manipulations 🟢
├── 06_util_awaited.ts <- Unwrapping unwieldy utility loops 🟢
├── 07_classes_constructor.ts <- Type checking initializations 🟢
├── 08_access_modifier_public_private.ts <- Target class field encapsulation 🟢
├── 09_access_modifier_protected.ts <- Subclass inheritance constraints 🟢
├── 10_getters_setters.ts <- Intercepting state transformations 🟡
├── 11_async_promises.ts <- Explicit asynchronous data streams 🟢
├── 12_runtime_validation_theory.ts <- Compile erasure vs. Zod schemas 🟡
├── 13_parameter_properties.ts <- Boilerplate constructor shorthand 🟡
├── 14_enums_and_abstract.ts <- Value collections & class blueprints 🟡
└── 15_mapped_conditional.ts <- Type-level mapping loop structures ⚪

Final Syllabus Progress Score: 100% - By Afnan Khan
