import CommandDispatcher from "./lib/CommandDispatcher";
import LiteralMessage from "./lib/LiteralMessage";
import ParseResults from "./lib/ParseResults";
import StringReader from "./lib/StringReader";
import LiteralArgumentBuilder from "./lib/builder/LiteralArgumentBuilder";
import RequiredArgumentBuilder from "./lib/builder/RequiredArgumentBuilder";
import CommandContext from "./lib/context/CommandContext";
import CommandContextBuilder from "./lib/context/CommandContextBuilder";
import ParsedArgument from "./lib/context/ParsedArgument";
import ParsedCommandNode from "./lib/context/ParsedCommandNode";
import StringRange from "./lib/context/StringRange";
import SuggestionsContext from "./lib/context/SuggestionContext";
import CommandSyntaxException from "./lib/exceptions/CommandSyntaxException";
import DynamicCommandExceptionType from "./lib/exceptions/DynamicCommandExceptionType";
import SimpleCommandExceptionType from "./lib/exceptions/SimpleCommandExceptionType";
import Suggestion from "./lib/suggestion/Suggestion";
import Suggestions from "./lib/suggestion/Suggestions";
import SuggestionsBuilder from "./lib/suggestion/SuggestionsBuilder";
import ArgumentCommandNode from "./lib/tree/ArgumentCommandNode";
import LiteralCommandNode from "./lib/tree/LiteralCommandNode";
import RootCommandNode from "./lib/tree/RootCommandNode";
export declare const word: typeof import("./lib/arguments/StringArgumentType").default.word, string: typeof import("./lib/arguments/StringArgumentType").default.string, greedyString: typeof import("./lib/arguments/StringArgumentType").default.greedyString, bool: typeof import("./lib/arguments/BoolArgumentType").default.bool, integer: typeof import("./lib/arguments/IntegerArgumentType").default.integer, float: typeof import("./lib/arguments/FloatArgumentType").default.float;
declare const _default: {
    dispatcher: CommandDispatcher<unknown>;
    word: typeof import("./lib/arguments/StringArgumentType").default.word;
    string: typeof import("./lib/arguments/StringArgumentType").default.string;
    greedyString: typeof import("./lib/arguments/StringArgumentType").default.greedyString;
    bool: typeof import("./lib/arguments/BoolArgumentType").default.bool;
    integer: typeof import("./lib/arguments/IntegerArgumentType").default.integer;
    float: typeof import("./lib/arguments/FloatArgumentType").default.float;
    literal: typeof LiteralArgumentBuilder.literal;
    argument: typeof RequiredArgumentBuilder.argument;
    CommandDispatcher: typeof CommandDispatcher;
    LiteralMessage: typeof LiteralMessage;
    ParseResults: typeof ParseResults;
    StringReader: typeof StringReader;
    LiteralArgumentBuilder: typeof LiteralArgumentBuilder;
    RequiredArgumentBuilder: typeof RequiredArgumentBuilder;
    CommandContext: typeof CommandContext;
    CommandContextBuilder: typeof CommandContextBuilder;
    ParsedArgument: typeof ParsedArgument;
    ParsedCommandNode: typeof ParsedCommandNode;
    StringRange: typeof StringRange;
    SuggestionsContext: typeof SuggestionsContext;
    CommandSyntaxException: typeof CommandSyntaxException;
    SimpleCommandExceptionType: typeof SimpleCommandExceptionType;
    DynamicCommandExceptionType: typeof DynamicCommandExceptionType;
    Suggestion: typeof Suggestion;
    Suggestions: typeof Suggestions;
    SuggestionsBuilder: typeof SuggestionsBuilder;
    ArgumentCommandNode: typeof ArgumentCommandNode;
    LiteralCommandNode: typeof LiteralCommandNode;
    RootCommandNode: typeof RootCommandNode;
};
export default _default;
