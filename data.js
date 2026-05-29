// ===== COURSE DATA =====
export const MODULES = [
  {
    id: 'cbt',
    title: 'Cognitive Behavioral Therapy',
    code: 'CBT · Module 1',
    emoji: '🧠',
    color: '#4A7C6F',
    hours: 8,
    ceus: 8,
    evidenceLevel: 'Level I — Systematic Reviews & RCTs',
    tagline: 'The gold standard for depression, anxiety, and OCD.',
    desc: 'Master thought records, behavioral activation, Socratic questioning, exposure hierarchies, and relapse prevention planning.',
    topics: ['Cognitive model & schema theory', 'Cognitive distortions taxonomy', 'Thought records & Socratic questioning', 'Behavioral activation', 'Exposure & response prevention', 'Relapse prevention'],
    lessons: [
      {
        id: 'cbt-overview',
        title: 'Module Overview & Learning Objectives',
        type: 'overview',
        duration: '15 min',
        ceus: 0.25,
      },
      {
        id: 'cbt-core',
        title: 'The Cognitive Model & Schema Theory',
        type: 'content',
        duration: '45 min',
        ceus: 1.5,
        content: {
          sections: [
            {
              heading: 'The Cognitive Model',
              body: `Cognitive Behavioral Therapy (CBT), developed by Aaron T. Beck in the 1960s, is built on the foundational premise that our thoughts, feelings, and behaviors are deeply interconnected. Psychological distress arises not from situations themselves, but from the interpretations we assign to those situations.

The cognitive model proposes that it is not the events in our lives that determine how we feel, but rather the meaning we attach to those events. Distorted or unhelpful thinking patterns drive emotional distress and maladaptive behaviors — and crucially, these patterns can be identified, examined, and changed.`,
              callout: {
                type: 'sage',
                label: 'Core Premise',
                text: 'Situations → Automatic Thoughts → Emotions + Physical Sensations + Behaviors. Changing the thought changes the downstream emotional and behavioral response. This is the fundamental therapeutic lever in CBT.'
              }
            },
            {
              heading: 'Three Levels of Cognition',
              body: `The cognitive model proposes three levels of cognition that clinicians must assess and address across the course of treatment:`,
              list: [
                { num: '1', title: 'Automatic Thoughts', desc: 'Rapid, often unconscious thoughts that arise in specific situations. These are the most accessible level and the primary focus early in treatment. They feel plausible in the moment and carry emotional weight. Example: "I failed this presentation, so everyone thinks I\'m incompetent."' },
                { num: '2', title: 'Intermediate Beliefs', desc: 'Rules, attitudes, and assumptions that generate automatic thoughts. These often appear as conditional statements. Example: "If I make a mistake, people will reject me" or "I must perform perfectly to have any worth."' },
                { num: '3', title: 'Core Beliefs', desc: 'Deeply held, global, and rigid beliefs about the self, others, and the world — often formed in childhood through formative experiences. Examples: "I am fundamentally unlovable," "People will always abandon me," or "The world is dangerous."' }
              ]
            },
            {
              heading: 'Schema Theory',
              body: `Jeffrey Young expanded Beck\'s model with schema theory, identifying 18 Early Maladaptive Schemas (EMS) that organize individuals\' fundamental beliefs about themselves and others. Schemas form in childhood in response to unmet emotional needs and are maintained through three processes:`,
              list: [
                { num: '1', title: 'Schema Maintenance', desc: 'Behaviors and cognitive distortions that reinforce the schema, keeping it alive. Example: a client with abandonment schema may constantly seek reassurance, paradoxically driving partners away.' },
                { num: '2', title: 'Schema Avoidance', desc: 'Emotional, cognitive, or behavioral strategies that prevent the schema from being activated. Example: avoiding close relationships altogether to prevent the pain of abandonment.' },
                { num: '3', title: 'Schema Compensation', desc: 'Overcompensating in the opposite direction of the schema. Example: someone with a defectiveness schema becoming a compulsive overachiever.' }
              ],
              callout: {
                type: 'warm',
                label: 'Clinical Application',
                text: 'When clients present with longstanding, treatment-resistant patterns, consider moving from standard CBT to Schema Therapy. Young\'s Young Schema Questionnaire (YSQ) is a validated tool for schema assessment.'
              }
            }
          ],
          video: { title: 'Aaron Beck Demonstrates the Cognitive Model — Beck Institute Archive', duration: '28 min' }
        }
      },
      {
        id: 'cbt-distortions',
        title: 'Cognitive Distortions: A Clinical Taxonomy',
        type: 'content',
        duration: '40 min',
        ceus: 1.5,
        content: {
          sections: [
            {
              heading: 'Cognitive Distortions: The Clinician\'s Taxonomy',
              body: `A cornerstone CBT skill is recognizing and naming cognitive distortions — systematic patterns of irrational thinking. Familiarity with these allows you to gently challenge your client\'s thinking with precision and compassion. These are not moral failings; they are learned cognitive habits that can be unlearned.`,
              callout: {
                type: 'warm',
                label: 'Clinical Note',
                text: 'When identifying distortions, avoid being confrontational. Frame the identification collaboratively: "I notice that when you describe this situation, it sounds like your mind might be doing something we call all-or-nothing thinking. Does that fit for you?"'
              },
              list: [
                { num: '1', title: 'All-or-Nothing Thinking', desc: 'Viewing experiences in absolute, black-and-white categories with no middle ground. "If I\'m not perfect, I\'m a total failure." Often drives perfectionism and shame.' },
                { num: '2', title: 'Catastrophizing', desc: 'Exaggerating the importance of problems or expecting the worst-case scenario. "I\'ll panic during the presentation and humiliate myself, and my career will be over."' },
                { num: '3', title: 'Mind Reading', desc: 'Assuming you know what others are thinking, usually negatively, without evidence. "She didn\'t text back — she must be angry with me." Often generates social anxiety.' },
                { num: '4', title: 'Emotional Reasoning', desc: 'Assuming that negative emotions necessarily reflect reality. "I feel like a fraud, therefore I must be one." Particularly common in depression and imposter syndrome.' },
                { num: '5', title: 'Overgeneralization', desc: 'Drawing sweeping, global conclusions from a single negative event. "I got rejected once — no one will ever love me." The word "never" or "always" is often a signal.' },
                { num: '6', title: 'Personalization', desc: 'Blaming oneself for external events or taking excessive responsibility. "My partner is in a bad mood — it must be something I did."' },
                { num: '7', title: 'Should Statements', desc: 'Applying inflexible rules to self or others. "I should be able to handle this." Albert Ellis called this "musturbation." Creates shame and resentment.' },
                { num: '8', title: 'Mental Filter', desc: 'Focusing exclusively on one negative detail, filtering out the positive. "I got 49/50 on my presentation, but I stumbled on one slide — the whole thing was terrible."' },
                { num: '9', title: 'Discounting the Positive', desc: 'Rejecting positive experiences by insisting they don\'t count. "Anyone could have done that" or "They only said that to be nice."' },
                { num: '10', title: 'Jumping to Conclusions', desc: 'Making negative interpretations without definitive facts. Includes mind-reading and fortune-telling (predicting negative outcomes as fact).' }
              ]
            }
          ]
        }
      },
      {
        id: 'cbt-techniques',
        title: 'Clinical Techniques: Thought Records & Socratic Dialogue',
        type: 'content',
        duration: '50 min',
        ceus: 2,
        content: {
          sections: [
            {
              heading: 'The Thought Record (DTR)',
              body: `The Dysfunctional Thought Record is the workhorse of CBT. It provides clients with a structured tool to capture and examine their thinking in real time. The 7-column format captures the full cognitive-emotional-behavioral chain.`,
              list: [
                { num: '1', title: 'Situation', desc: 'Who, what, where, when. Objective description only — no interpretation yet.' },
                { num: '2', title: 'Moods', desc: 'Emotions experienced, rated 0-100% intensity.' },
                { num: '3', title: 'Automatic Thoughts', desc: 'What went through your mind? Identify the "hot thought" — the one most connected to the emotional response.' },
                { num: '4', title: 'Evidence Supporting the Hot Thought', desc: 'Factual evidence (not interpretations) that supports the automatic thought.' },
                { num: '5', title: 'Evidence Against the Hot Thought', desc: 'What facts contradict the thought? What would a friend or judge of fact say?' },
                { num: '6', title: 'Balanced / Alternative Perspective', desc: 'A more nuanced, realistic perspective that takes all evidence into account.' },
                { num: '7', title: 'Re-rate Moods', desc: 'How much do you believe the hot thought now (0-100%)? What do you feel now?' }
              ],
              callout: {
                type: 'blue',
                label: 'Therapist Tip',
                text: 'Many clients resist thought records because they feel artificial or they "know" the balanced thought intellectually without feeling it. This is called "head-heart lag." Normalize this and use behavioral experiments alongside thought records to build experiential evidence for the new belief.'
              }
            },
            {
              heading: 'Socratic Questioning Techniques',
              body: `Socratic dialogue is the conversational art of CBT. Rather than lecturing or providing answers, the skilled CBT clinician uses guided discovery — asking questions that help the client arrive at insights themselves. This is more powerful and more durable than being told what to think.`,
              list: [
                { num: '→', title: 'Reality-testing questions', desc: '"What is the evidence for and against this thought? What would a fair witness say?"' },
                { num: '→', title: 'Alternative-generating questions', desc: '"What are other possible explanations for what happened? What else might be true?"' },
                { num: '→', title: 'Decatastrophizing questions', desc: '"What is the worst that could actually happen? Could you cope with that? What is the most likely outcome?"' },
                { num: '→', title: 'Perspective-taking questions', desc: '"What would you say to a close friend who had this thought? Would you judge them as harshly?"' },
                { num: '→', title: 'Functional impact questions', desc: '"How does holding this belief affect you? What would change if you believed the alternative?"' }
              ]
            }
          ]
        }
      },
      {
        id: 'cbt-practice',
        title: 'Case Practice: Socratic Questioning',
        type: 'practice',
        duration: '30 min',
        ceus: 1,
        scenarios: [
          {
            id: 1,
            label: 'Clinical Scenario · Case 1 of 3',
            quote: '"I had a job interview yesterday and I totally blanked on one question. Now I know I didn\'t get the job. I\'m just not smart enough for this industry — I never have been. I\'m going to end up unemployed and lose my apartment. I can\'t stop thinking about how I\'m going to mess up every interview from now on."',
            task: 'Identify at least 3 cognitive distortions present in this client\'s statement, then write a compassionate response that begins the process of Socratic questioning to gently challenge the thinking. Remember: validate the emotional experience before challenging the cognition.',
            placeholder: 'Write your clinical response here...\n\nConsider:\n• What distortions do you notice?\n• What Socratic questions might you use?\n• How would you validate the client\'s emotional experience?',
            modelResponse: 'Distortions present:\n1. Catastrophizing — "I\'m going to lose my apartment"\n2. All-or-nothing thinking — "I\'m not smart enough, I never have been"\n3. Overgeneralization — "I\'m going to mess up every interview"\n4. Fortune-telling — "I know I didn\'t get the job"\n\nClinical response:\n"It sounds like that moment really stayed with you, and I can understand how distressing that uncertainty feels. I\'m curious — when you say you \'totally blanked,\' what exactly happened? And what leads you to feel certain that one question decided the outcome? What would you say to a close friend who described this same situation to you?"'
          },
          {
            id: 2,
            label: 'Clinical Scenario · Case 2 of 3',
            quote: '"My mother called me this morning and I didn\'t answer. Now she\'ll think I don\'t love her. She\'s going to tell the whole family I\'m a bad daughter. I always do this — I always let people down. I\'m fundamentally selfish and I don\'t deserve good relationships."',
            task: 'This client appears to be moving rapidly from a behavioral event to a core belief. Identify the cognitive distortions, the likely intermediate belief, and the core belief being expressed. Write a response that validates her feelings while gently examining the leap from "didn\'t answer the phone" to "I\'m fundamentally selfish."',
            placeholder: 'Write your clinical response...',
            modelResponse: 'Distortions: Mind-reading ("she\'ll think I don\'t love her"), personalization/overgeneralization ("I always let people down"), all-or-nothing thinking.\n\nIntermediate belief: "If I don\'t always put others first, I\'m selfish."\n\nCore belief: "I am fundamentally unlovable/defective."\n\nClinical response: "I want to stay with something you just said — you moved very quickly from \'I didn\'t answer one phone call\' to \'I don\'t deserve good relationships.\' I\'m wondering if we can slow that down together. What does it mean to you that you didn\'t answer? And how much do you believe that conclusion — 0 to 100?"'
          },
          {
            id: 3,
            label: 'Clinical Scenario · Case 3 of 3',
            quote: '"I know I should be grateful. My doctor says my depression is getting better on paper. But I still feel terrible most mornings. I feel like I\'m failing at recovery. Everyone else seems to be able to feel better faster. I\'m fundamentally broken in a way that can\'t be fixed."',
            task: 'This client shows signs of "emotional reasoning" and is making comparisons that fuel her sense of failure. Identify the distortions and write a response that addresses the emotional reasoning while also providing psychoeducation about the non-linear nature of recovery.',
            placeholder: 'Write your clinical response...',
            modelResponse: 'Distortions: Emotional reasoning ("I feel terrible therefore I\'m failing"), social comparison/mind-reading ("everyone else gets better faster"), all-or-nothing thinking, overgeneralization.\n\nClinical response: "There\'s something really important here — you\'re using how you feel in the morning as the measure of whether you\'re getting better, even though your doctor is seeing improvement in other ways. Our feelings are real, but they\'re not always accurate meters of our progress. Recovery from depression is rarely a straight line — it often looks like two steps forward, one step back. I\'m curious: what would \'not failing at recovery\' actually look like to you?"'
          }
        ]
      },
      {
        id: 'cbt-quiz',
        title: 'Knowledge Check',
        type: 'quiz',
        duration: '20 min',
        ceus: 0.5,
        questions: [
          {
            id: 1,
            question: 'A client says, "My colleague gave a better presentation than me. I\'m terrible at my job and everyone knows it." Which cognitive distortions are most clearly demonstrated in the second sentence?',
            options: ['Personalization — blaming oneself for an external outcome', 'Fortune-telling — predicting a negative future outcome', 'Overgeneralization combined with mind-reading', 'Emotional reasoning — using feelings as proof of fact'],
            correct: 2,
            explanation: 'Correct. "I\'m terrible at my job" is an overgeneralization — drawing a sweeping conclusion from a single comparative event. "Everyone knows it" is mind-reading — assuming knowledge of colleagues\' perceptions without evidence. Strong clinical identification.'
          },
          {
            id: 2,
            question: 'According to Beck\'s cognitive model, which level of cognition is MOST directly addressed in early-stage CBT?',
            options: ['Core beliefs about self and world', 'Automatic thoughts in specific situations', 'Intermediate beliefs and conditional assumptions', 'Early maladaptive schemas from childhood'],
            correct: 1,
            explanation: 'Correct. Standard CBT begins at the level of automatic thoughts because they are the most accessible — clients can identify them in session and record them between sessions. Core beliefs and schemas are addressed in later stages of treatment once the therapeutic alliance is established and the client is skilled with the cognitive model.'
          },
          {
            id: 3,
            question: 'A client responds to your Socratic question with a balanced alternative thought, but then says "I know that logically, but I still feel terrible." This phenomenon is best described as:',
            options: ['Treatment resistance requiring medication consultation', 'Insufficient homework compliance', 'Head-heart lag — intellectual acceptance without emotional shift', 'Evidence that the automatic thought is accurate'],
            correct: 2,
            explanation: 'Head-heart lag is the common and expected gap between intellectual and emotional processing in CBT. The intervention is not to repeat the cognitive argument, but to use behavioral experiments and imagery techniques that build experiential evidence, which produces emotional — not just intellectual — change.'
          },
          {
            id: 4,
            question: 'Which of the following best describes the evidence base for CBT in the treatment of major depressive disorder?',
            options: ['CBT is effective only in mild-to-moderate depression', 'CBT is comparable to antidepressants in acute treatment, with superior relapse prevention', 'CBT must be combined with medication to achieve clinically significant outcomes', 'CBT has a weak evidence base compared to other psychotherapies for depression'],
            correct: 1,
            explanation: 'Multiple meta-analyses and landmark RCTs (Hollon et al., 2005; DeRubeis et al., 2005) have demonstrated that CBT is comparable to antidepressant medication in acute treatment of moderate-to-severe depression, and superior to medication in preventing relapse after treatment ends. This relapse prevention advantage is CBT\'s strongest distinguishing feature.'
          },
          {
            id: 5,
            question: 'In Schema Therapy (Young), a client with an abandonment schema who avoids all close relationships to prevent anticipated rejection is engaging in which schema process?',
            options: ['Schema maintenance', 'Schema compensation', 'Schema avoidance', 'Schema healing'],
            correct: 2,
            explanation: 'Schema avoidance involves cognitive, emotional, or behavioral strategies that prevent the schema from being triggered — at the cost of preventing its healing. The client avoids intimacy to avoid feeling the abandonment pain, but this also prevents corrective relational experiences. Schema maintenance would involve behaviors that paradoxically confirm the abandonment belief (e.g., clinging). Schema compensation would involve overcompensating in the opposite direction.'
          }
        ]
      },
      {
        id: 'cbt-resources',
        title: 'Resources & References',
        type: 'resources',
        duration: '—',
        ceus: 0,
        resources: [
          { type: 'pdf', title: 'Cognitive Therapy of Depression — Beck, Rush, Shaw & Emery (1979)', desc: 'The founding text. Chapters 1–4 are essential reading for all CBT practitioners.' },
          { type: 'pdf', title: 'Cognitive Behavior Therapy: Basics and Beyond — Judith Beck (3rd Ed.)', desc: 'The standard clinical training manual. Downloadable module handouts available.' },
          { type: 'video', title: 'Judith Beck Demonstrates the Thought Record — Beck Institute', desc: '34-minute annotated session demonstration with reflective questions.' },
          { type: 'link', title: 'Meta-Analysis: CBT Efficacy Across 269 Studies — Hofmann et al., 2012', desc: 'Journal of Cognitive Therapy. Essential for understanding the evidence landscape.' },
          { type: 'audio', title: 'Socratic Questioning in Practice — Audio Case Study Series', desc: 'Three annotated session recordings with expert commentary. 42 minutes total.' },
          { type: 'tool', title: '7-Column Thought Record (DTR) — Client Worksheet', desc: 'Standard dysfunctional thought record with clinician guide and scoring notes.' },
          { type: 'tool', title: 'Behavioral Activation Activity Schedule', desc: 'Weekly planner with mastery/pleasure ratings. Instructions for psychoeducation included.' },
          { type: 'tool', title: 'Young Schema Questionnaire (YSQ-S3) — Brief Version', desc: '90-item schema assessment tool with scoring guide and clinical interpretation notes.' }
        ]
      }
    ]
  },
  {
    id: 'mi',
    title: 'Motivational Interviewing',
    code: 'MI · Module 2',
    emoji: '🤝',
    color: '#C4956A',
    hours: 6,
    ceus: 6,
    evidenceLevel: 'Level I — Systematic Reviews & RCTs',
    tagline: 'Client-centered approach to eliciting and strengthening change.',
    desc: 'Develop OARS microskills, manage ambivalence, evoke change talk, and strengthen commitment language using Miller and Rollnick\'s evidence-based framework.',
    topics: ['Spirit of MI: Partnership, acceptance, compassion, evocation', 'OARS microskills', 'Ambivalence and the decisional balance', 'Recognizing and evoking change talk', 'Strengthening commitment language', 'Rolling with resistance'],
    lessons: [
      { id: 'mi-overview', title: 'Module Overview', type: 'overview', duration: '15 min', ceus: 0.25 },
      { id: 'mi-spirit', title: 'The Spirit of MI & Foundational Principles', type: 'content', duration: '40 min', ceus: 1.5, content: { sections: [{ heading: 'The Spirit of MI', body: 'Motivational Interviewing, developed by William Miller and Stephen Rollnick, is more than a set of techniques — it is a collaborative conversational style for strengthening a person\'s own motivation and commitment to change. The spirit of MI is characterized by four interrelated elements.', list: [{ num: 'P', title: 'Partnership', desc: 'MI is done "with" the client, not "to" them. The practitioner is an expert in MI; the client is the expert on their own life.' }, { num: 'A', title: 'Acceptance', desc: 'Encompasses absolute worth (unconditional positive regard), accurate empathy, autonomy support, and affirmation of strengths.' }, { num: 'C', title: 'Compassion', desc: 'Actively promoting the client\'s welfare, prioritizing their needs.' }, { num: 'E', title: 'Evocation', desc: 'Drawing out the client\'s own motivation for change, rather than installing or imposing motivation from outside.' }], callout: { type: 'sage', label: 'Key Distinction', text: 'MI is not a way of tricking people into changing. Clients can detect inauthenticity immediately. The spirit of MI — genuine curiosity, warmth, and respect for autonomy — must be present for the techniques to be effective.' } }, { heading: 'The Righting Reflex & Why It Backfires', body: 'The "righting reflex" is the clinician\'s instinct to correct clients and move them toward the "right" behavior. This is natural and well-intentioned, but it paradoxically increases resistance. When you argue for change, the client argues against it — and the act of voicing resistance strengthens their commitment to the status quo.', callout: { type: 'warm', label: 'Research Finding', text: 'Miller\'s landmark research showed that the more a counselor confronted and argued for change, the more the client drank. Clinician behavior directly influenced client behavior and outcomes. Confrontational approaches produce more resistance, not more change.' } }] } },
      { id: 'mi-oars', title: 'OARS Microskills in Practice', type: 'content', duration: '45 min', ceus: 1.5, content: { sections: [{ heading: 'OARS: The Core Microskills', body: 'OARS is the foundation of MI communication. These four microskills, used together, create the conditions for change talk to emerge.', list: [{ num: 'O', title: 'Open Questions', desc: 'Invite elaboration and exploration. "What concerns you about your current situation?" rather than "Are you worried about your drinking?" Open questions cannot be answered with yes/no.' }, { num: 'A', title: 'Affirming', desc: 'Recognize and acknowledge the client\'s strengths, efforts, and inherent worth. "It took real courage to come here today." Affirmations are not flattery — they are genuine recognition of what the client has done or who they are.' }, { num: 'R', title: 'Reflective Listening', desc: 'The most powerful microskill. Reflecting back what the client has said — the emotion and meaning, not just the words. Simple reflection repeats or slightly rephrases. Complex reflection adds meaning, emotion, or continues the paragraph.' }, { num: 'S', title: 'Summarizing', desc: 'Collecting what the client has said and reflecting it back. Used to transition, to link themes, and to particularly highlight change talk. "Let me see if I\'ve understood..." Summaries demonstrate genuine listening and help clients hear their own ambivalence.' }], callout: { type: 'blue', label: 'Reflection Types', text: 'Simple reflection: "You\'re feeling overwhelmed." | Amplified reflection (used carefully with resistance): "So you feel there\'s really no problem at all." | Double-sided reflection (acknowledges ambivalence): "On one hand you want to cut back, and on the other you\'re not sure life would be as enjoyable."' } }] } },
      { id: 'mi-practice', title: 'Case Practice: Evoking Change Talk', type: 'practice', duration: '30 min', ceus: 1, scenarios: [{ id: 1, label: 'MI Clinical Scenario · Case 1', quote: '"Look, my wife says I drink too much but I don\'t see a problem. I come here because she threatened to leave. A few beers after work is how I unwind — every guy I know does it. It\'s not like I\'m missing work or anything. I just don\'t want the hassle."', task: 'This client is in the precontemplation/early contemplation stage. Avoid the righting reflex. Write a response using OARS that: (1) avoids arguing, (2) demonstrates empathy, (3) gently explores any ambivalence present, and (4) attempts to evoke a reason to consider change from within the client\'s own value system.', placeholder: 'Write your MI-consistent clinical response...', modelResponse: 'Response: "It sounds like coming here was itself a big step — you came even though you\'re not convinced there\'s a problem, and that tells me something about how much your marriage matters to you. I\'m curious — when your wife brings this up, what does she say she sees that concerns her? And is there any part of you, even a small part, that wonders if she might have a point?"' }, { id: 2, label: 'MI Clinical Scenario · Case 2', quote: '"I know I need to exercise more. I feel terrible all the time, I\'m tired, my doctor told me I need to lose weight. But I get home from work and I\'m just completely exhausted. By the time I make dinner and get the kids settled, I have no energy left. And on weekends there\'s always something happening. I want to, I just can\'t."', task: 'This client is in the contemplation stage — they can see both sides of the ambivalence clearly. Write a double-sided reflection that captures the ambivalence, then use an evocative question to strengthen the "change" side without arguing.', placeholder: 'Write your MI-consistent clinical response...', modelResponse: 'Double-sided reflection: "So on one hand you genuinely want to feel better — you\'re tired of feeling tired, and you know exercise would help. And on the other hand, at the end of the day you\'re running on empty and there\'s just nothing left."\n\nEvocative question: "If you imagine yourself a year from now, and you\'ve found some way to make this work — what would be different about how you feel day to day?"' }] },
      { id: 'mi-quiz', title: 'Knowledge Check', type: 'quiz', duration: '20 min', ceus: 0.5, questions: [{ id: 1, question: 'A client says, "I know I should quit smoking but I enjoy it and I\'m not ready to stop." Which MI-consistent response best demonstrates a double-sided reflection?', options: ['"So you know smoking is harmful but you\'re choosing to continue anyway."', '"On one hand you can see reasons to quit, and on the other, smoking still feels like it gives you something important."', '"It sounds like you\'re just not motivated enough to change yet."', '"What would it take for you to become ready to quit?"'], correct: 1, explanation: 'A double-sided reflection acknowledges both sides of ambivalence without judgment, using the client\'s own language. It begins with "On one hand..." and "on the other hand..." and reflects the emotional content on both sides. Option A is confrontational; C is pejorative; D is an open question (useful but not a reflection).' }, { id: 2, question: 'According to MI, change talk (DARN-C) includes which of the following elements?', options: ['Desire, Ability, Reasons, Need, Commitment/Taking Steps', 'Denial, Ambivalence, Resistance, Neutrality, Capitulation', 'Defense, Anxiety, Rationalizing, Negotiating, Conceding', 'Direction, Action, Reinforcement, Normalization, Change'], correct: 0, explanation: 'DARN-C stands for Desire ("I want to..."), Ability ("I could..."), Reasons ("It would help because..."), Need ("I have to..."), and Commitment/Taking Steps ("I will... / I\'ve started..."). The first four are preparatory change talk; the last two are mobilizing change talk. Listening for and reflecting DARN-C language is a core MI skill.' }, { id: 3, question: 'Which of the following practitioner behaviors is MOST likely to elicit sustain talk (resistance) from an ambivalent client?', options: ['Asking open questions about the client\'s values', 'Using complex reflections to acknowledge both sides of ambivalence', 'Providing unsolicited advice and arguments for change', 'Affirming the client\'s past efforts and strengths'], correct: 2, explanation: 'Providing unsolicited advice and arguing for change triggers the "righting reflex" counter-reaction — the client argues against change to defend their autonomy. Miller\'s early research demonstrated this mechanism clearly: the more counselors argued, the more clients resisted. MI was designed specifically to avoid this dynamic.' }] },
      { id: 'mi-resources', title: 'Resources & References', type: 'resources', duration: '—', ceus: 0, resources: [{ type: 'pdf', title: 'Motivational Interviewing: Helping People Change — Miller & Rollnick (3rd Ed.)', desc: 'The definitive text. Chapters 6-9 cover OARS and change talk in clinical depth.' }, { type: 'video', title: 'William Miller Demonstrates MI with a Real Client', desc: '45-minute session demonstration with process commentary. From MINT Training.' }, { type: 'tool', title: 'MISC 2.0 — Motivational Interviewing Skill Code', desc: 'Validated fidelity tool for assessing MI adherence. Includes clinician self-rating form.' }, { type: 'link', title: 'Cochrane Review: MI for Health Behavior Change (2020)', desc: '48 RCTs, N=9,465. Strong evidence for MI across health behavior outcomes.' }] }
    ]
  },
  {
    id: 'dbt',
    title: 'Dialectical Behavior Therapy',
    code: 'DBT · Module 3',
    emoji: '⚖️',
    color: '#5B4FCF',
    hours: 10,
    ceus: 10,
    evidenceLevel: 'Level I — Multiple RCTs',
    tagline: 'Marsha Linehan\'s biosocial model for emotional dysregulation.',
    desc: 'Skills training in mindfulness, distress tolerance, emotional regulation, and interpersonal effectiveness. The evidence-based treatment for BPD and suicidality.',
    topics: ['Biosocial theory & validation', 'Mindfulness: Core mindfulness skills', 'Distress tolerance: TIPP, ACCEPTS, IMPROVE', 'Emotional regulation: PLEASE, Opposite Action', 'Interpersonal effectiveness: DEAR MAN, GIVE, FAST', 'Chain analysis and behavioral assessment'],
    lessons: [
      { id: 'dbt-overview', title: 'Module Overview', type: 'overview', duration: '15 min', ceus: 0.25 },
      { id: 'dbt-biosocial', title: 'Biosocial Theory & DBT Framework', type: 'content', duration: '50 min', ceus: 2, content: { sections: [{ heading: 'The Biosocial Theory of Emotional Dysregulation', body: 'Marsha Linehan\'s biosocial theory proposes that Borderline Personality Disorder (and emotional dysregulation more broadly) results from a transaction between biological emotional sensitivity and an invalidating environment. Neither factor alone is sufficient — it is the ongoing transaction between them that produces chronic dysregulation.', list: [{ num: 'B', title: 'Biological Sensitivity', desc: 'High baseline emotional sensitivity (responds quickly), high emotional reactivity (responds intensely), and slow return to baseline (stays activated longer). This is temperamental, not chosen.' }, { num: 'I', title: 'Invalidating Environment', desc: 'An environment that systematically communicates that the individual\'s private experiences — emotions, thoughts, sensations — are wrong, inaccurate, trivial, or shameful. Critically, this can occur in well-intentioned families.' }], callout: { type: 'sage', label: 'The Dialectic', text: 'The central dialectic in DBT is Acceptance ↔ Change. Clients must be accepted exactly as they are while also being pushed to change. Therapists hold this tension constantly. "You are doing the best you can AND you need to do better."' } }, { heading: 'Validation: The Core Therapeutic Stance', body: 'Validation in DBT is not agreement — it is the communication that the client\'s response makes sense in context. Linehan identifies six levels of validation, from the most basic (paying attention) to the most powerful (radical genuineness).', list: [{ num: '1', title: 'Listening & Observing', desc: 'Full, undivided attention. Non-verbal communication of interest.' }, { num: '2', title: 'Accurate Reflection', desc: 'Demonstrating accurate understanding of what the client has said.' }, { num: '3', title: 'Articulating the Unverbalized', desc: 'Naming thoughts, emotions, or meanings the client has not explicitly stated.' }, { num: '4', title: 'Validating in Terms of History', desc: '"Given your childhood, of course you feel this way." Makes sense given past.' }, { num: '5', title: 'Validating in Terms of Current Events', desc: 'Makes sense given the present situation — any person would respond similarly.' }, { num: '6', title: 'Radical Genuineness', desc: 'Treating the client as a capable adult, responding as one human to another — not from behind a professional mask.' }] }] } },
      { id: 'dbt-skills', title: 'The Four DBT Skills Modules', type: 'content', duration: '60 min', ceus: 2.5, content: { sections: [{ heading: 'Core Mindfulness Skills', body: 'Mindfulness is the foundation of all DBT skills. All other modules are practiced mindfully. The goal is to increase Wise Mind — the integration of Emotion Mind (driven by emotions) and Reasonable Mind (driven by facts).', list: [{ num: 'W', title: 'What Skills', desc: 'Observe (notice without labels), Describe (put words on experience), Participate (throw yourself fully into activity).' }, { num: 'H', title: 'How Skills', desc: 'Non-judgmentally (drop the labels), One-mindfully (one thing at a time), Effectively (do what works, not what\'s "right").' }], callout: { type: 'warm', label: 'Distress Tolerance: TIPP', text: 'Temperature (cold water on face activates dive reflex), Intense Exercise, Paced Breathing, Progressive Relaxation. These are biological survival skills for crisis moments — not long-term solutions, but highly effective for acute distress peaks.' } }, { heading: 'Emotional Regulation', body: 'Emotional regulation skills target the frequency and intensity of emotional experiences, and increase positive emotional experiences.', list: [{ num: 'P', title: 'PLEASE Skills', desc: 'treat PhysicaL illness, balanced Eating, Avoid mood-altering substances, balanced Sleep, Exercise. Biological foundations of emotional regulation.' }, { num: 'O', title: 'Opposite Action', desc: 'Acting opposite to the emotion\'s action urge. Shame urges isolation → engage with community. Fear urges avoidance → approach. Anger urges attack → gently avoid. Changes emotions by changing action.' }, { num: 'C', title: 'Check the Facts', desc: 'Asking whether the emotion fits the facts of the situation — not whether the emotion is valid, but whether its intensity matches the actual circumstances.' }] }, { heading: 'Interpersonal Effectiveness', body: 'Three acronyms target three goals in interpersonal situations:', list: [{ num: 'D', title: 'DEAR MAN', desc: 'Describe, Express, Assert, Reinforce, stay Mindful, Appear confident, Negotiate. Goal: getting what you want while maintaining the relationship.' }, { num: 'G', title: 'GIVE', desc: 'Gentle, Interested, Validate, Easy manner. Goal: maintaining and strengthening the relationship.' }, { num: 'F', title: 'FAST', desc: 'Fair, no Apologies (for existing), Stick to values, Truthful. Goal: maintaining self-respect.' }] }] } },
      { id: 'dbt-practice', title: 'Case Practice: Chain Analysis', type: 'practice', duration: '35 min', ceus: 1, scenarios: [{ id: 1, label: 'DBT Clinical Scenario · Chain Analysis', quote: '"I don\'t know why I did it. Friday night I was fine, and then Saturday morning I woke up feeling terrible and by the afternoon I had cut myself. It just happened. I can\'t control it."', task: 'This client has described a self-harm episode as spontaneous and uncontrollable. A cornerstone of DBT is the behavioral chain analysis — a detailed, non-judgmental examination of the chain of events, thoughts, emotions, and vulnerabilities that led to the problem behavior. Write a clinical response that: (1) validates the feeling of being out of control without agreeing that control is impossible, (2) introduces the idea of the behavioral chain, and (3) begins collaboratively to identify potential links in the chain.', placeholder: 'Write your DBT-consistent clinical response...', modelResponse: '"I hear how frightening it is to feel like something that big just happened without warning. And at the same time, I want to gently suggest that behaviors like this almost never come out of nowhere — there\'s usually a whole chain of events, thoughts, and feelings that led up to that moment, and they were happening so fast that it felt automatic.\n\nI\'d like us to slow that chain way down together — not to judge any of it, but because if we can see the links, we can find the places where a different skill might interrupt the chain before it reaches that point.\n\nLet\'s start at the very beginning: you said Saturday morning you woke up feeling terrible. What was the first thing you noticed when you opened your eyes?"' }] },
      { id: 'dbt-quiz', title: 'Knowledge Check', type: 'quiz', duration: '20 min', ceus: 0.5, questions: [{ id: 1, question: 'In DBT\'s biosocial theory, Borderline Personality Disorder is understood as the result of:', options: ['Primarily genetic factors that cause neurological emotional hypersensitivity', 'Inadequate parenting causing attachment disruption in infancy', 'A transaction between biological emotional sensitivity and an invalidating environment', 'Chronic trauma exposure without adequate social support'], correct: 2, explanation: 'Linehan\'s biosocial theory emphasizes the TRANSACTION between biology and environment — neither alone causes BPD. A biologically sensitive child in a validating environment, or a less sensitive child in an invalidating environment, would be less likely to develop the full clinical picture. This transactional understanding is clinically important: it removes blame from both the client and the family.' }, { id: 2, question: 'A client in acute distress (9/10 intensity) is unlikely to benefit from which of the following DBT interventions?', options: ['TIPP skills — Temperature, Intense Exercise, Paced Breathing', 'Distracting with ACCEPTS — Activities, Contributing, Comparisons...', 'Opposite Action practice targeting emotion-linked action urges', 'Cognitive restructuring and examining evidence for/against thoughts'], correct: 3, explanation: 'Cognitive interventions require prefrontal cortex access — the capacity for logical reasoning. At very high emotional intensity (often described as the "emotional mind fully activated"), the PFC is effectively offline. DBT\'s distress tolerance skills (TIPP, ACCEPTS, IMPROVE) are designed for these high-intensity moments. Cognitive skills are better deployed after the acute intensity has been reduced.' }, { id: 3, question: 'Validation Level 5 in DBT involves:', options: ['Full unconditional acceptance of the client\'s worldview', 'Validating that any person in the client\'s current situation would feel similarly', 'Treating the client as a capable, resilient adult without condescension', 'Accurately reflecting back what the client has said without interpretation'], correct: 1, explanation: 'Level 5 validation communicates: "Your response makes sense given the current situation — a reasonable person would feel/think/do similarly." This is distinct from Level 4 (makes sense given your history) and Level 6 (radical genuineness). Level 5 is particularly powerful because it normalizes the response without pathologizing it.' }] },
      { id: 'dbt-resources', title: 'Resources & References', type: 'resources', duration: '—', ceus: 0, resources: [{ type: 'pdf', title: 'DBT Skills Training Manual — Marsha Linehan (2nd Ed.)', desc: 'The complete skills manual. Includes all handouts and worksheets for client use.' }, { type: 'video', title: 'Marsha Linehan Demonstrates Radical Acceptance', desc: '22-minute demonstration with one of Linehan\'s actual clients. Powerful clinical modeling.' }, { type: 'tool', title: 'DBT Chain Analysis Form', desc: 'Structured behavioral chain analysis template with clinician guide.' }, { type: 'link', title: 'Linehan et al. (2006): JAMA RCT — DBT vs. TfP for BPD', desc: 'Landmark two-year RCT comparing DBT with Transference-Focused Psychotherapy.' }] }
    ]
  },
  {
    id: 'trauma',
    title: 'Trauma-Informed Care',
    code: 'TIC + EMDR · Module 4',
    emoji: '🛡️',
    color: '#9C3F6B',
    hours: 9,
    ceus: 9,
    evidenceLevel: 'Level I — Multiple RCTs (EMDR)',
    tagline: 'Safety, trust, choice, collaboration, and empowerment.',
    desc: 'The six principles of trauma-informed care, EMDR protocol phases, somatic approaches, window of tolerance, and protecting yourself from vicarious trauma.',
    topics: ['Neurobiology of trauma', 'The six SAMHSA principles of TIC', 'Window of tolerance & affect regulation', 'EMDR: 8-phase protocol', 'Somatic approaches & body-based interventions', 'Secondary traumatic stress & therapist self-care'],
    lessons: [
      { id: 'trauma-overview', title: 'Module Overview', type: 'overview', duration: '15 min', ceus: 0.25 },
      { id: 'trauma-neuro', title: 'The Neurobiology of Trauma', type: 'content', duration: '50 min', ceus: 2, content: { sections: [{ heading: 'How Trauma Reorganizes the Brain', body: 'Understanding the neurobiology of trauma is essential for trauma-informed practice. Trauma does not simply create bad memories — it fundamentally reorganizes how the brain and body respond to threat. Three regions are particularly implicated.', list: [{ num: '1', title: 'The Amygdala (Smoke Detector)', desc: 'Becomes hyperactivated after trauma. Fires threat responses to cues that resemble — but are not — the original trauma. This is not "overreacting"; it is an adaptive system working as designed, but calibrated to a threat that no longer exists.' }, { num: '2', title: 'The Prefrontal Cortex (Watchower)', desc: 'Becomes underactive during trauma activation. The capacity for rational thought, perspective-taking, and inhibitory control is reduced. This explains why clients "know" they are safe but "feel" terrified.' }, { num: '3', title: 'The Hippocampus (Filing System)', desc: 'Impaired by high cortisol during trauma. Traumatic memories may not be fully contextualized in time and place, which is why they can feel as if they are happening now, not then.' }], callout: { type: 'sage', label: 'Window of Tolerance', text: 'Dan Siegel\'s window of tolerance describes the zone of optimal arousal within which clients can process experience. Hyperarousal (above the window) = fight/flight, anxiety, panic. Hypoarousal (below) = freeze, dissociation, numbness. Trauma therapy works within the window, gently expanding it over time.' } }, { heading: 'The Six SAMHSA Principles of Trauma-Informed Care', body: 'SAMHSA\'s trauma-informed approach applies across all settings — not just formal trauma therapy. These principles guide how organizations and clinicians create conditions for healing.', list: [{ num: '1', title: 'Safety', desc: 'Physical and emotional safety in the therapeutic space. Predictable, consistent structure. Clear roles and expectations.' }, { num: '2', title: 'Trustworthiness & Transparency', desc: 'Decisions are transparent. No hidden agendas. Consistent follow-through on what you say you will do.' }, { num: '3', title: 'Peer Support', desc: 'Connections with individuals who have lived experience of trauma as a foundation of recovery.' }, { num: '4', title: 'Collaboration & Mutuality', desc: 'Power differences are minimized. Healing happens in relationship and in genuine partnership.' }, { num: '5', title: 'Empowerment & Choice', desc: 'Trauma robs people of choice. Restoring agency — offering choices wherever possible — is intrinsically therapeutic.' }, { num: '6', title: 'Cultural, Historical & Gender Issues', desc: 'Recognition of cultural context of trauma, particularly historical trauma, intergenerational trauma, and systemic oppression.' }] }] } },
      { id: 'trauma-emdr', title: 'EMDR: Protocol & Evidence', type: 'content', duration: '55 min', ceus: 2, content: { sections: [{ heading: 'Eye Movement Desensitization and Reprocessing (EMDR)', body: 'Developed by Francine Shapiro in 1987, EMDR is now endorsed by the World Health Organization (WHO), the American Psychiatric Association (APA), and the UK\'s NICE guidelines as a first-line treatment for PTSD. The 8-phase protocol systematically processes traumatic memories to reduce their emotional charge.', list: [{ num: '1', title: 'History & Treatment Planning', desc: 'Comprehensive trauma history, identifying targets for processing, assessing stability and resources.' }, { num: '2', title: 'Preparation', desc: 'Psychoeducation about EMDR, establishing the therapeutic relationship, teaching stabilization skills (safe place, container).' }, { num: '3', title: 'Assessment', desc: 'Identifying target memory: image, Negative Cognition (NC), Positive Cognition (PC), Validity of Cognition (VoC), emotions, SUD rating, body location.' }, { num: '4', title: 'Desensitization', desc: 'Bilateral stimulation (eye movements, taps, or tones) while client holds target in mind. Sets of 24-36 movements. Processing continues until SUD = 0.' }, { num: '5', title: 'Installation', desc: 'Strengthening the Positive Cognition using bilateral stimulation until VoC = 7.' }, { num: '6', title: 'Body Scan', desc: 'Client holds the target image and PC together and scans the body for residual tension or disturbance.' }, { num: '7', title: 'Closure', desc: 'Ensuring the client is stabilized at session end. Debriefing and preparation for possible continued processing between sessions.' }, { num: '8', title: 'Reassessment', desc: 'At the beginning of subsequent sessions: reviewing progress, checking SUD and VoC, deciding whether to continue processing or move to new targets.' }], callout: { type: 'warm', label: 'Note on Training', text: 'Basic EMDR training requires completion of an EMDRIA-approved training program (approximately 50 hours). This module provides conceptual foundation and evidence overview. Full competency requires supervised practice with trained EMDR consultants.' } }] } },
      { id: 'trauma-practice', title: 'Case Practice: Trauma-Informed Responses', type: 'practice', duration: '30 min', ceus: 1, scenarios: [{ id: 1, label: 'Trauma-Informed Scenario · Case 1', quote: '"I know he\'s gone but when I\'m driving and I see a black truck like his, my heart starts pounding and I feel like I\'m back there. I know it\'s stupid — it\'s just a truck — but I can\'t stop it."', task: 'This client is describing a trauma response (hyperarousal, flashback-like reexperiencing). She is shaming herself with "I know it\'s stupid." Write a trauma-informed response that: (1) normalizes her response using neurobiology without lecturing, (2) addresses her self-shame directly, (3) introduces the concept of trauma triggers, and (4) offers a brief grounding skill.', placeholder: 'Write your trauma-informed clinical response...', modelResponse: '"What you\'re describing is not stupid at all — it\'s exactly what happens when the brain has been through something terrifying. Your nervous system learned that black trucks meant danger, and now it\'s trying to protect you every time it sees one. It\'s doing its job. The problem isn\'t that your brain is broken — it\'s that it learned something it now needs to unlearn.\n\nWhen that happens while you\'re driving — heart pounding, feeling like you\'re back there — the fastest way to help your nervous system know you\'re in the present is to notice five things you can see right now. It sounds simple, but it works because it anchors you in the sensory present. Would it be okay if we practiced that together right now?"' }] },
      { id: 'trauma-quiz', title: 'Knowledge Check', type: 'quiz', duration: '20 min', ceus: 0.5, questions: [{ id: 1, question: 'Dan Siegel\'s "window of tolerance" refers to:', options: ['The number of trauma sessions a client can tolerate before needing a break', 'The zone of optimal arousal within which clients can process experience without dissociating or becoming overwhelmed', 'The maximum time between trauma sessions for therapeutic continuity', 'The period of time between trauma exposure and symptom onset'], correct: 1, explanation: 'The window of tolerance describes the zone between hyperarousal (above: anxiety, panic, fight/flight) and hypoarousal (below: dissociation, freeze, numbness). Effective trauma therapy occurs within this window — gently titrating exposure to stay within the client\'s window while gradually expanding it.' }, { id: 2, question: 'In EMDR\'s Phase 3 (Assessment), "SUD" refers to:', options: ['Subjective Units of Distress — a 0-10 rating of current distress connected to the target memory', 'Standard Units of Duration — measuring how long the traumatic memory lasts when recalled', 'Systematic Uncertainty Dial — measuring confidence in positive cognitions', 'Somatic Upset Designation — rating body-based distress responses to trauma cues'], correct: 0, explanation: 'SUD stands for Subjective Units of Distress, rated 0-10 (0 = no disturbance, 10 = maximum disturbance imaginable). It is measured at baseline during Phase 3 and tracked throughout Phase 4 (Desensitization). The goal is for SUD to reach 0 (or at least 1-2) before moving to installation.' }, { id: 3, question: 'A client who is a military veteran from a collectivist cultural background minimizes his trauma symptoms because "men in my family don\'t talk about these things." Which SAMHSA principle is MOST directly relevant here?', options: ['Safety — creating physical and emotional safety in the therapeutic space', 'Trustworthiness — ensuring transparent clinical decision-making', 'Cultural, Historical & Gender Issues — recognizing cultural and gender context of trauma responses', 'Empowerment — restoring agency and choice to trauma survivors'], correct: 2, explanation: 'The sixth SAMHSA principle explicitly addresses cultural, historical, and gender issues — including how cultural norms around masculinity and stoicism, intergenerational trauma, and historical context shape how clients experience, express, and seek help for trauma. A trauma-informed clinician would not pathologize this avoidance but would understand it within its cultural context.' }] },
      { id: 'trauma-resources', title: 'Resources & References', type: 'resources', duration: '—', ceus: 0, resources: [{ type: 'pdf', title: 'The Body Keeps the Score — van der Kolk (2014)', desc: 'Essential reading on the neurobiology of trauma. Chapters 1-6 are clinically indispensable.' }, { type: 'pdf', title: 'Getting Past Your Past — Francine Shapiro (2012)', desc: 'EMDR\'s creator explains the model and self-help applications.' }, { type: 'video', title: 'EMDR Session Demonstration — Francine Shapiro', desc: 'Complete Phase 3-6 demonstration with a real client. 52 minutes.' }, { type: 'link', title: 'WHO Guidelines: EMDR for PTSD (2013)', desc: 'WHO endorsement of EMDR as a first-line treatment for PTSD in adults.' }, { type: 'tool', title: 'EMDR Standard Protocol Session Form', desc: 'Phase 3-8 session recording form with SUD/VoC tracking.' }] }
    ]
  },
  {
    id: 'act',
    title: 'Acceptance & Commitment Therapy',
    code: 'ACT · Module 5',
    emoji: '🌱',
    color: '#2B6CB0',
    hours: 7,
    ceus: 7,
    evidenceLevel: 'Level I — Growing RCT base',
    tagline: 'Psychological flexibility as the foundation of wellbeing.',
    desc: 'The Hexaflex model: acceptance, defusion, self-as-context, contact with the present, values, and committed action. Third-wave behavioral therapy rooted in Relational Frame Theory.',
    topics: ['Relational Frame Theory & psychological flexibility', 'Acceptance vs. experiential avoidance', 'Cognitive defusion techniques', 'Self-as-context: the observing self', 'Values clarification', 'Committed action and behavior change'],
    lessons: [
      { id: 'act-overview', title: 'Module Overview', type: 'overview', duration: '15 min', ceus: 0.25 },
      { id: 'act-hexaflex', title: 'The Hexaflex: Six Core Processes', type: 'content', duration: '50 min', ceus: 2, content: { sections: [{ heading: 'Psychological Flexibility & the Hexaflex', body: 'ACT, developed by Steven Hayes and colleagues, aims to increase psychological flexibility — the ability to contact the present moment fully, as a conscious human being, and to change or persist in behavior when doing so serves valued ends. The Hexaflex model describes six interrelated processes that together constitute psychological flexibility.', list: [{ num: '1', title: 'Acceptance', desc: 'Active, non-judgmental embrace of private events — thoughts, feelings, sensations — without needless attempts to change their form or frequency. NOT resignation or tolerance. The metaphor: make room for the wave rather than trying to stop it.' }, { num: '2', title: 'Defusion', desc: 'Creating distance from thoughts — seeing them as mental events rather than literal truths. "I am worthless" → "I notice I\'m having the thought that I am worthless." Dozens of specific defusion techniques exist.' }, { num: '3', title: 'Present Moment Awareness', desc: 'Flexible, non-judgmental contact with the present moment, rather than being dominated by stories about the past or future. Similar to but broader than mindfulness.' }, { num: '4', title: 'Self-as-Context', desc: 'The observing self — the "I" who notices thoughts and feelings without being defined by them. "You are not your thoughts. You are the awareness that notices your thoughts."' }, { num: '5', title: 'Values', desc: 'Chosen life directions — what matters most to the client, independent of feelings in the moment. Values are not goals (achievable) but directions (ongoing). They guide committed action even when uncomfortable.' }, { num: '6', title: 'Committed Action', desc: 'Taking effective action guided by values, even in the presence of difficult thoughts and feelings. The culmination of the other five processes.' }], callout: { type: 'sage', label: 'Experiential Avoidance', text: 'Experiential avoidance — the attempt to control, avoid, or eliminate unwanted internal experiences — is the central target in ACT. Research shows that the more vigorously people try to suppress unwanted thoughts and feelings, the more intense and frequent those experiences become (ironic process theory, Wegner).' } }] } },
      { id: 'act-defusion', title: 'Defusion & Acceptance Techniques', type: 'content', duration: '45 min', ceus: 2, content: { sections: [{ heading: 'Cognitive Defusion Techniques', body: 'Defusion techniques create psychological distance from thoughts, reducing their literal believability and impact without trying to change their content. ACT has dozens of evidence-supported defusion techniques.', list: [{ num: '→', title: 'Naming the story', desc: '"I notice my mind is telling me the \'I\'m a failure\' story again."' }, { num: '→', title: 'Leaves on a stream', desc: 'Visualizing thoughts as leaves floating past on a stream — watching without grabbing hold.' }, { num: '→', title: 'Singing the thought', desc: 'Singing the distressing thought to the tune of "Happy Birthday" — breaking the literal meaning through absurdity.' }, { num: '→', title: 'Thanking the mind', desc: '"Thank you, mind, for that thought." Creates distance through acknowledgment rather than argument.' }, { num: '→', title: 'The word repetition exercise', desc: 'Repeating a self-critical word (e.g., "stupid") for 30 seconds until its literal meaning dissolves into sound.' }], callout: { type: 'warm', label: 'Values vs. Goals', text: 'Values are directions, not destinations. "Being a loving parent" is a value — it can never be permanently achieved or crossed off a list. "Attending my child\'s recital" is a goal — it serves the value. This distinction is clinically important: when clients confuse values with goals, they may feel like failures if circumstances prevent achieving a goal.' } }] } },
      { id: 'act-practice', title: 'Case Practice: Values Clarification', type: 'practice', duration: '30 min', ceus: 1, scenarios: [{ id: 1, label: 'ACT Clinical Scenario · Values Work', quote: '"I used to know what I wanted. But I\'ve been depressed for so long that I don\'t feel anything about anything. People ask me what I value and I just draw a blank. I don\'t know who I am anymore."', task: 'This client is experiencing anhedonia and identity confusion common in chronic depression. From an ACT perspective, values do not require emotional resonance to be identified — they can be accessed through behavior and history even when feelings are absent. Write a response that validates her experience, introduces this ACT reframe, and uses one concrete values clarification technique.', placeholder: 'Write your ACT-consistent clinical response...', modelResponse: '"What you\'re describing — that flatness, that blankness when you look for what matters — is one of the cruelest things about depression. It doesn\'t just make you feel bad; it steals your sense of what\'s worth feeling bad for.\n\nHere\'s something I\'ve found: we don\'t always find values by looking inward for a feeling. Sometimes we find them in what we do when we\'re at our best, or in what hurts when it\'s missing. So I want to ask you something different: Is there anything that still makes you angry, or sad, or frustrated? Even a small thing?\n\nAngry tells us something. Sad tells us something. Those are often breadcrumbs back to what we care about, even when we can\'t feel the caring directly."' }] },
      { id: 'act-quiz', title: 'Knowledge Check', type: 'quiz', duration: '20 min', ceus: 0.5, questions: [{ id: 1, question: 'In ACT, "experiential avoidance" refers to:', options: ['Avoiding social situations that trigger anxiety', 'Attempts to control, avoid, or escape unwanted internal experiences such as thoughts, feelings, and sensations', 'The natural human tendency to avoid physical pain', 'Behavioral avoidance of trauma-related cues'], correct: 1, explanation: 'Experiential avoidance in ACT specifically refers to attempts to control or eliminate unwanted private events — thoughts, feelings, memories, bodily sensations. ACT research consistently shows this avoidance strategy paradoxically amplifies the unwanted experiences. The alternative is not to feel more or feel less, but to carry the experience differently through acceptance and defusion.' }, { id: 2, question: 'A client says, "I know I should exercise more, but every time I think about going to the gym, I feel anxious and tell myself I\'ll look ridiculous." An ACT-consistent intervention would be:', options: ['Challenge the belief that they will look ridiculous using cognitive restructuring', 'Have the client practice defusion: "I notice I\'m having the thought that I\'ll look ridiculous"', 'Use systematic desensitization to reduce anxiety about the gym', 'Explore the early childhood roots of their self-consciousness'], correct: 1, explanation: 'ACT does not try to change the content of the thought ("you won\'t look ridiculous") but rather changes the client\'s relationship to the thought through defusion. "I notice I\'m having the thought that..." creates distance from the thought, reducing its hold, without needing to prove or disprove it. The client can then choose action based on values (health, vitality) rather than being controlled by the thought.' }, { id: 3, question: 'In ACT, "values" are best defined as:', options: ['Long-term goals that guide a person\'s life decisions', 'Chosen life directions that function as ongoing guides for behavior, independent of outcomes', 'Beliefs about what is morally correct and important', 'Emotional priorities that shift based on current psychological state'], correct: 1, explanation: 'ACT draws a crucial distinction: goals are achievable and can be crossed off a list; values are directions, not destinations. "Being a present and loving parent" cannot be permanently achieved — it is a direction one moves toward in every interaction. This means values are always available as a guide, regardless of whether any particular goal has been achieved or not.' }] },
      { id: 'act-resources', title: 'Resources & References', type: 'resources', duration: '—', ceus: 0, resources: [{ type: 'pdf', title: 'Acceptance and Commitment Therapy: An Experiential Approach — Hayes, Strosahl, Wilson', desc: 'The foundational ACT text. Comprehensive theoretical and clinical coverage.' }, { type: 'pdf', title: 'The Happiness Trap — Russ Harris', desc: 'Excellent client-facing and clinician-friendly introduction to ACT principles.' }, { type: 'video', title: 'Steven Hayes Demonstrates Defusion Techniques', desc: '40-minute workshop demonstration with commentary on clinical reasoning.' }, { type: 'tool', title: 'ACT Values Card Sort', desc: '100-card values clarification exercise. Printable and digital versions included.' }, { type: 'link', title: 'A-Tjak et al. (2015): Meta-Analysis of ACT — Psychiatric Services', desc: '39 RCTs demonstrating ACT efficacy across anxiety, depression, and chronic pain.' }] }
    ]
  },
  {
    id: 'family',
    title: 'Family Systems Therapy',
    code: 'Structural/Bowen · Module 6',
    emoji: '👨‍👩‍👧',
    color: '#D4844A',
    hours: 8,
    ceus: 8,
    evidenceLevel: 'Level II — Controlled Studies',
    tagline: 'Understanding the individual through the lens of the system.',
    desc: 'Bowen theory, genograms, triangles, differentiation of self, structural mapping, and multi-generational transmission. Thinking systemically about individual and relational distress.',
    topics: ['Bowen family systems theory', 'Differentiation of self', 'Triangles and triangulation', 'Genogram construction and interpretation', 'Structural family therapy (Minuchin)', 'Multi-generational transmission process'],
    lessons: [
      { id: 'family-overview', title: 'Module Overview', type: 'overview', duration: '15 min', ceus: 0.25 },
      { id: 'family-bowen', title: 'Bowen Family Systems Theory', type: 'content', duration: '55 min', ceus: 2, content: { sections: [{ heading: 'The Eight Concepts of Bowen Theory', body: 'Murray Bowen\'s family systems theory reconceptualized psychological distress as a property of the relational system rather than the individual. The theory comprises eight interlocking concepts, of which four are foundational for clinical practice.', list: [{ num: '1', title: 'Differentiation of Self', desc: 'The capacity to maintain a clearly defined sense of self while remaining in emotional contact with others. High differentiation = can stay connected without losing self or becoming reactive. Low differentiation = fusion (losing self in relationship) or emotional cutoff (pseudo-independence through distance).' }, { num: '2', title: 'Triangles', desc: 'The basic building block of emotional systems. When anxiety in a dyad becomes too high, a third party is triangulated to stabilize the system. Understanding triangles is essential for family and couples work.' }, { num: '3', title: 'Nuclear Family Emotional Process', desc: 'The four patterns by which families manage undifferentiation: marital conflict, dysfunction in a spouse, impairment of one or more children, emotional distance.' }, { num: '4', title: 'Multi-generational Transmission Process', desc: 'How emotional functioning patterns are transmitted across generations. Anxiety, cutoff, and relational patterns do not originate with the client — they have a history.' }], callout: { type: 'sage', label: 'The Genogram', text: 'The genogram — a multi-generational family diagram using standardized symbols — is the primary assessment and therapeutic tool in Bowen-oriented therapy. Three generations minimum. Symbols: squares = males, circles = females, double lines = enmeshment, jagged lines = conflict, diagonal lines = cutoff. McGoldrick\'s Genograms in Family Assessment is the definitive reference.' } }, { heading: 'Differentiation: The Clinical Keystone', body: 'Differentiation of self is the central concept in Bowen theory and the primary therapeutic goal. It exists on a continuum from 0 (complete fusion/reactivity) to 100 (theoretical complete differentiation). Most people function in the 25-75 range.', list: [{ num: 'F', title: 'Fused Individuals (Low Differentiation)', desc: 'Highly reactive to others\' emotional states. Sense of self depends on approval. May appear overly accommodating or explosively reactive. Relationships feel necessary for survival.' }, { num: 'D', title: 'Differentiated Individuals (Higher)', desc: 'Can take I-positions ("This is what I think; this is who I am") under pressure without becoming aggressive or withdrawing. Can be fully present without being swept away.' }], callout: { type: 'warm', label: 'Systemic Thinking Shift', text: 'The critical therapeutic reframe in systems work: there is no "identified patient." The symptom is the system\'s message. When a child is "the problem," the clinician asks: what function does this child\'s symptom serve in the family system? Who does it protect? What triangle does it stabilize?' } }] } },
      { id: 'family-structural', title: 'Structural Family Therapy', type: 'content', duration: '45 min', ceus: 2, content: { sections: [{ heading: 'Salvador Minuchin\'s Structural Approach', body: 'Structural family therapy (Minuchin) focuses on the organization of the family — its structure. Problems arise when the family structure is inflexible or dysfunctional. The therapist\'s role is to join the family, map its structure, and then intervene to restructure it.', list: [{ num: '1', title: 'Subsystems', desc: 'The family organized into functional units: spousal subsystem, parental subsystem, sibling subsystem. Each has different functions and rules.' }, { num: '2', title: 'Boundaries', desc: 'The rules that define who participates and how. Clear boundaries = healthy differentiation. Diffuse boundaries = enmeshment. Rigid boundaries = disengagement.' }, { num: '3', title: 'Hierarchies', desc: 'The executive function in the family. Problems arise when the hierarchy is unclear, inverted (e.g., parentified children), or destabilized (e.g., by addiction or illness).' }, { num: '4', title: 'Enactment', desc: 'The structural therapist\'s primary technique: bringing problematic interactions into the session in the present ("Can you talk to each other about this right now?") and then observing, commenting on, and restructuring what emerges.' }] }] } },
      { id: 'family-practice', title: 'Case Practice: Systemic Assessment', type: 'practice', duration: '30 min', ceus: 1, scenarios: [{ id: 1, label: 'Family Systems Scenario · Case 1', quote: '"My 13-year-old won\'t go to school. He says he has stomachaches every morning. The doctors can\'t find anything wrong. My husband says I\'m too soft on him, and we fight about it constantly. My husband travels for work three weeks a month, and when he\'s gone, my son sleeps in my bed."', task: 'From a structural family systems perspective, describe what you observe in this family\'s structure. What triangles do you see? What might the son\'s symptom be "doing" for the system? Describe your initial systemic hypothesis and write an opening statement that joins this family systemically — without blaming any member.', placeholder: 'Write your systemic assessment and joining response...', modelResponse: 'Systemic hypothesis: The son\'s school refusal symptom appears to be serving a stabilizing function in the system. When father is absent (3 of 4 weeks), mother and son form a coalition — he sleeps in her bed, filling an emotional/proximity role that is unavailable when the spousal relationship is geographically disrupted. The marital conflict ("too soft") suggests tension in the spousal subsystem that may predate or exist independently of the symptom. The son may be triangulated into the couple\'s disagreements through the conflict about parenting style.\n\nJoining statement: "It sounds like your whole family has been working really hard — your son is managing something difficult, you\'re managing enormous anxiety about him, and you and your husband are each trying to help in different ways but finding yourselves at odds. I don\'t think any of you is the problem here. I\'d like to understand how the whole family has been affected by this situation."' }] },
      { id: 'family-quiz', title: 'Knowledge Check', type: 'quiz', duration: '20 min', ceus: 0.5, questions: [{ id: 1, question: 'In Bowen family systems theory, "differentiation of self" refers to:', options: ['The process of separating from one\'s family of origin in early adulthood', 'The capacity to maintain a defined sense of self while remaining in emotional contact with others', 'The ability to identify and label one\'s own emotional states accurately', 'The developmental process of forming an individual identity in adolescence'], correct: 1, explanation: 'Differentiation of self is specifically about the capacity to hold onto one\'s own identity and values while remaining genuinely connected — not withdrawn — from significant others. It is NOT separation or emotional cutoff, which Bowen considered a pseudo-solution. The differentiated person can be moved by others without being swept away, and can take I-positions without aggression or collapse.' }, { id: 2, question: 'In structural family therapy, "enactment" refers to:', options: ['Role-playing past family conflicts in session using empty chair techniques', 'Inviting family members to interact around a problem in the session while the therapist observes and intervenes', 'Asking family members to re-enact positive family memories to identify strengths', 'Psychodrama techniques that externalize family dynamics into physical space'], correct: 1, explanation: 'Enactment is Minuchin\'s primary structural technique: rather than hearing about the family\'s interactions (history), the therapist invites the family to enact them in the room in the present tense. "Can you talk to each other about this right now?" This gives the therapist direct access to the actual relational structure — and the ability to intervene and restructure it in real time.' }, { id: 3, question: 'A family presents with an 8-year-old who has become increasingly parentified — managing household tasks and monitoring her mother\'s mood. From a structural perspective, this MOST likely reflects:', options: ['An enmeshed sibling subsystem affecting all children in the household', 'A boundary violation between the parental and sibling subsystems, with disrupted hierarchy', 'Secure attachment that has generalized to include caregiving behaviors', 'Cultural variations in family roles that should be normalized without intervention'], correct: 1, explanation: 'Parentification reflects a structural problem with subsystem boundaries and hierarchy. The child has crossed from the sibling subsystem into a functional role within the parental subsystem. This disrupts the appropriate hierarchy and places inappropriate responsibility on the child. A structural intervention would strengthen the parental subsystem (helping the parent access adult support) so the child can return to age-appropriate functioning.' }] },
      { id: 'family-resources', title: 'Resources & References', type: 'resources', duration: '—', ceus: 0, resources: [{ type: 'pdf', title: 'Family Therapy: Concepts and Methods — Michael Nichols', desc: 'The comprehensive family therapy textbook. Covers all major systemic approaches.' }, { type: 'pdf', title: 'Genograms in Family Assessment — McGoldrick, Gerson & Petry', desc: 'The definitive genogram reference. Complete symbol guide and clinical interpretation.' }, { type: 'video', title: 'Salvador Minuchin — Live Family Session (Philadelphia Child Guidance Clinic)', desc: 'Archival 1970s session with structural interventions demonstrated masterfully.' }, { type: 'tool', title: 'Genogram Construction Template & Symbol Guide', desc: 'Printable three-generation genogram template with complete standardized symbol set.' }, { type: 'link', title: 'Bowen Center for the Study of the Family — bowencenter.org', desc: 'Primary resource for Bowen theory training, publications, and clinical consultation.' }] }
    ]
  }
];

export const USER_DATA_KEY = 'therapistce_user';
export const PROGRESS_KEY = 'therapistce_progress';

export function getProgress() {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch { return {}; }
}

export function saveProgress(progress) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch {}
}

export function getUser() {
  try {
    const stored = localStorage.getItem(USER_DATA_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch { return null; }
}

export function saveUser(user) {
  try { localStorage.setItem(USER_DATA_KEY, JSON.stringify(user)); } catch {}
}

export function calculateOverallProgress(progress) {
  const totalLessons = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = Object.values(progress).filter(v => v === 'complete').length;
  return Math.round((completedLessons / totalLessons) * 100);
}

export function calculateModuleProgress(moduleId, progress) {
  const module = MODULES.find(m => m.id === moduleId);
  if (!module) return 0;
  const completed = module.lessons.filter(l => progress[l.id] === 'complete').length;
  return Math.round((completed / module.lessons.length) * 100);
}

export function getTotalCEUs(progress) {
  let ceus = 0;
  MODULES.forEach(m => {
    m.lessons.forEach(l => {
      if (progress[l.id] === 'complete') ceus += (l.ceus || 0);
    });
  });
  return Math.round(ceus * 10) / 10;
}
