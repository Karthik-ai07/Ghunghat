$files = Get-ChildItem -Path src -Include *.jsx,*.js -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 1. Remove 'import type' or change to 'import'
    $content = $content -replace 'import type\s+\{([^}]+)\}\s+from\s+["'']([^"'']+)["''];?', 'import {$1} from "$2";'
    
    # 2. Remove type annotations like ": Metadata", ": string", ": any", ": boolean", ": number"
    # This is tricky with regex, but we'll target common Next.js/React patterns
    $content = $content -replace ':\s*Metadata', ''
    $content = $content -replace ':\s*React\.ReactNode', ''
    $content = $content -replace ':\s*\{\s*children:\s*React\.ReactNode\s*\}', ''
    $content = $content -replace 'Readonly<([^>]+)>', '$1'
    
    # 3. Remove common prop types in function components: ({ size = 400 }: { size?: number }) -> ({ size = 400 })
    $content = $content -replace '(\([^)]+\)):\s*\{[^}]+\}', '$1'
    
    # 4. Remove 'as Const' or type assertions
    $content = $content -replace '\s+as\s+const', ''
    
    Set-Content $file.FullName $content
}
