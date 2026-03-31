# Sync organization profile from this repo

When you edit **`org-profile/README.md`** on **`main`** and push, the workflow **Sync org profile** copies that file to **[EmergentDNA/.github](https://github.com/EmergentDNA/.github)** → **`profile/README.md`**, which GitHub shows on the [organization homepage](https://github.com/EmergentDNA).

## One-time setup

1. **Create** the org repo if needed: **EmergentDNA** org → **New repository** → name **`.github`** → public → create (can be empty).

2. **Fine-grained personal access token** (recommended) or classic PAT:
   - Resource owner: **EmergentDNA** org
   - Repository access: **Only select repositories** → **`.github`**
   - Permissions: **Contents** → Read and write

3. In **[walhimer/EmergentDNA](https://github.com/walhimer/EmergentDNA)** → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:
   - Name: **`ORG_DOTGITHUB_TOKEN`**
   - Value: the token

4. Push **`org-profile/`** and **`.github/workflows/`** to **`main`**. The workflow runs on that push; later edits to **`org-profile/README.md`** trigger another sync.

## Manual run

**Actions** → **Sync org profile** → **Run workflow**.

## If the job fails

- **403 / Resource not accessible**: token missing, expired, or no write access to **`EmergentDNA/.github`**.
- **Repository not found**: create **`.github`** under the org, or fix the org/repo name in the workflow file.

## Scope

This only updates the **org README** (`profile/README.md`). It does not mirror the whole **walhimer/EmergentDNA** codebase into the org; the org still points to your user repo for the canonical spec.
