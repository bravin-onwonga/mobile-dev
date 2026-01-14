*** Note on React-Native development ***

**Syntax**
UIView - iOS
android.view.View - android

JavaScript Thread - where we handle logic, state and the component structure

------------------           ----------          ---------
CODE - React code  --------> JS Thread --------> UI Thread ---+
------------------           ----------          ---------    |
Code written by      Code is bundled into JS    receives      |
developer            and runs in dedicated    rendering       |
                     thread                instructions thro' |
                                            Fabric            |
                                            -------------------
                                                 Native
                                            -------------------
                                            Platforms native OS, renders the final 
                                            