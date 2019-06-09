Messages = require '../messages'

Messages.setWithPrefix 'codegen',
  AsHTML: """As HTML page"""
  DialogueTitle: """
    Generated <%= Messages.getText("codegen.Lang", {lang: lang}) %>
    Code for <%= query.name || "Query" %>
  """
  CannotExportXML: """
    You cannot save the XML as a file directly. Please use your browser's cut
    and paste functionality.
  """
  PrimaryAction: 'Save'
  ChooseLang: 'Choose Language'
  ShowBoilerPlate: 'Show comments'
  HighlightSyntax: 'Highlight Syntax'
  GenerateCodeIn: ({lang}) -> """
    Generate #{ Messages.getText 'codegen.Lang', {lang} }
    #{ if lang isnt 'xml' then 'code' else '' }
  """
  Lang: ({lang}) -> switch lang
    when 'py' then 'Python'
    when 'pl' then 'Perl'
    when 'java' then 'Java'
    when 'rb' then 'Ruby'
    when 'js' then 'JavaScript'
    when 'xml' then 'XML'
    else throw new Error "Unknown language #{ lang }"

